import { useEffect, useMemo, useState } from "react";
import InputRows from "../components/InputRow";
import { RowModal } from "../interfaces/RowModal";
import { useTreeApi } from "../services/useTreeApi";
import { JustifyBetween } from "../styles/common/GlobalStyles";
import { PlusButton } from "../styles/common/PlusButtonStyles";
import {
  FirstEmptyContainer,
  InputRowContainer,
  LastEmptyContainer,
  MainPageContainer,
  SaveButton,
} from "../styles/pages/MainPageStyles";

export default function MainPage() {
  const { getTreeData } = useTreeApi();
  const [rowData, setRowData] = useState<RowModal[]>([]);
  const [latestDeleted, setLatestDeleted] = useState<RowModal>();

  useEffect(() => {
    getTreeData().then((data) => {
      setRowData(data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const handlePlusClick = () => {
    setRowData((previous) => {
      return [
        ...previous,
        {
          id: (previous.length + 1).toString(),
          value: "",
          readonly: false,
          subRows: [],
          deleted: false,
        },
      ];
    });
  };

  const updateRows = (row: RowModal) => {
    setLatestDeleted(row);
  };

  const hasMultipleRows = useMemo(
    () => rowData.filter((i) => i.deleted === false).length > 1,
    [latestDeleted] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleOnSave = () => {
    const fileData = JSON.stringify(rowData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `tree.json`;
    link.href = url;
    link.click();
  };

  return (
    <MainPageContainer>
      <JustifyBetween>
        <PlusButton onClick={handlePlusClick}>+</PlusButton>
        <SaveButton onClick={handleOnSave}>Save</SaveButton>
      </JustifyBetween>
      {rowData.map((row, index) => (
        <InputRowContainer key={row.id} hasMultiple={hasMultipleRows}>
          <div className="empty-container"></div>
          {index === 0 && <FirstEmptyContainer></FirstEmptyContainer>}
          <InputRows
            row={row}
            hasMultiple={hasMultipleRows}
            updateRows={updateRows}
          ></InputRows>
          {index === rowData.length - 1 && (
            <LastEmptyContainer></LastEmptyContainer>
          )}
        </InputRowContainer>
      ))}
    </MainPageContainer>
  );
}
