export const LoginForm = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type={"submit"}>SUBMIT</button>
    </form>
  );
};
