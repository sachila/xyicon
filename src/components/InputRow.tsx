import { useEffect, useMemo, useState } from "react";
import { TrashIcon } from "../icons/TrashIcon";
import { RowModal } from "../interfaces/RowModal";
import { Flex, JustifyBetween } from "../styles/common/GlobalStyles";
import { PlusButton } from "../styles/common/PlusButtonStyles";
import {
  HorizontalLine,
  InputContainer,
  InputElement,
  NestedInputRowContainer,
  PlusButtonContainer,
  SwitchContainer,
  SwitchLabel,
  TrashIconContainer,
} from "../styles/components/InputRowStyle";

export default function InputRows({
  row,
  hasMultiple,
  updateRows,
}: {
  row: RowModal;
  hasMultiple: boolean;
  isLastChild?: boolean;
  updateRows: (rows: RowModal) => void;
}) {
  const [subRows, setSubRows] = useState(row.subRows);
  const [value, setValue] = useState(row.value);
  const [readonly, setReadonly] = useState(row.readonly);
  const [deleted, setDeleted] = useState(row.deleted);
  const [showActions, setShowActions] = useState(false);
  const [latestDeleted, setLatestDeleted] = useState<RowModal>();

  const handlePlueClick = () => {
    setSubRows((state) => [
      ...state,
      {
        id: `${row.id}.${state.length + 1}`,
        value: "",
        readonly: false,
        subRows: [],
        deleted: false,
      },
    ]);
  };

  useEffect(() => {
    row.subRows = subRows;
  }, [subRows, subRows.length, row]);

  useEffect(() => {
    row.value = value;
  }, [value, row]);

  useEffect(() => {
    row.readonly = readonly;
  }, [readonly, row]);

  useEffect(() => {
    row.deleted = deleted;
    updateRows(row);
  }, [deleted, row]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasMultipleRows = useMemo(
    () => subRows.filter((i) => i.deleted === false).length > 1,
    [latestDeleted] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const updateSubRows = (row: RowModal) => {
    setLatestDeleted(row);
  };

  return (
    <>
      {!deleted && (
        <>
          <JustifyBetween
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
          >
            <InputContainer>
              {/* {isLastChild && (
                <NestedLastEmptyContainer></NestedLastEmptyContainer>
              )} */}
              <HorizontalLine hasMultiple={hasMultiple}></HorizontalLine>
              <InputElement
                isLastChild={false}
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                disabled={readonly}
              />
            </InputContainer>
            {showActions && (
              <Flex>
                <SwitchContainer>
                  <SwitchLabel>Read only</SwitchLabel>

                  <input
                    type="checkbox"
                    id="switch"
                    checked={readonly}
                    onChange={(e) => {
                      setReadonly(e.target.checked);
                    }}
                  />
                  <label htmlFor="switch">Toggle</label>
                  <TrashIconContainer onClick={() => setDeleted(true)}>
                    <TrashIcon></TrashIcon>
                  </TrashIconContainer>
                </SwitchContainer>
                <PlusButtonContainer>
                  <PlusButton onClick={handlePlueClick}>+</PlusButton>
                </PlusButtonContainer>
              </Flex>
            )}
          </JustifyBetween>
          {subRows.map((r, i) => (
            <NestedInputRowContainer key={r.id} hasMultiple={hasMultipleRows}>
              <InputRows
                row={r}
                hasMultiple={hasMultipleRows}
                updateRows={updateSubRows}
                isLastChild={i === subRows.length - 1}
              />
            </NestedInputRowContainer>
          ))}
        </>
      )}
    </>
  );
}
