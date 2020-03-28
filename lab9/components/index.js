import styles from "./labComponent.module.css";

function LabComponent() {
  return (
    <div>
      <p className={styles.example} id="example">Search for Pokemon!</p>
    </div>
  );
}

export default LabComponent;
