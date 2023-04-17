import * as Styled from './styles';

interface IInput {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string)=> void;
  onBlur: () => void;
  error: boolean;
}

export default function Input({ label, type, id, value, placeholder, onChange, error, onBlur }: IInput) {

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
        />

        {label &&
          <Styled.Label htmlFor={id}>
            {label}
          </Styled.Label>
        }

        {/* {error && <p className={styles.error}>{error}</p>} */}
      </Styled.Wrapper>
    </>
  );
};