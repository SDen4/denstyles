const Button = ({
  type = 'button',
  title = 'Push',
  disabled = false,
  onclick = () => null,
  addClass = {},
}) => {
  return (
    <button type={type} click={onclick} disabled={disabled} class={addClass}>
      {title}
    </button>
  );
};

export default Button;
