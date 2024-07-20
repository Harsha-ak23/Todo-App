import style from "./WelcomeMessage.module.css";
function WelcomeMessage() {
  return (
    <p className={style.errorMessage}>
      There is no task to do. So enjoy your Day.
    </p>
  );
}
export default WelcomeMessage;
