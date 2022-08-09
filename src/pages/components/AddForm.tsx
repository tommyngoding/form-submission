interface AddFormProps {
  onClick: any;
  testId: string;
  text: string;
}

export const AddForm = ({ onClick, testId, text }: AddFormProps) => {
  return (
    <div>
      <button data-testid={testId} onClick={onClick}>
        +
      </button>
      {text}
    </div>
  );
};
