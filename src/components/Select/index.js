import styles from "./style.module.css";

const Select = ({ onChange, value, options, label }) => (
  <div className={styles.selectWrapper}>
    <label htmlFor="select" className={styles.label}>Select type:</label>
    <select
      id="select"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={styles.select}
    >
      {options.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
