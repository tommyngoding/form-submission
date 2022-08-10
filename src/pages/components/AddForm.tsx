interface AddFormProps {
  onClick: any;
  testId: string;
  text: string;
}

export const AddForm = ({ onClick, testId, text }: AddFormProps) => {
  return (
    <button data-testid={testId} onClick={onClick} className="add-form-btn">
      <span className="plus-sign">+</span>
      <br />
      <span>{text}</span>
    </button>
  );
};
