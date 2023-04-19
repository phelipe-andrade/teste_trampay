import * as Styled from './styles';

interface IInput {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string)=> void;
  onBlur: () => void;
  disabled?: boolean;
}

export default function Input({ label, type, id, value, placeholder, onChange, onBlur, disabled = false }: IInput) {

  return (
    <>
      <Styled.Wrapper>
        <Styled.Input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
        />

        {label &&
          <Styled.Label htmlFor={id}>
            {label}
          </Styled.Label>
        }
      </Styled.Wrapper>
    </>
  );
};