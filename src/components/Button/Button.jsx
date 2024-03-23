import "./style.css"

function Button({ handleFilterChange, filter, dataText, style }) {

  return <>
    <button
      className={`colored ${style} ${filter === dataText ? 'filter-btn active' : 'filter-btn'}`}
      onClick={() => handleFilterChange(dataText)} data-text={dataText}>{dataText}</button>
  </>;
}

export default Button;