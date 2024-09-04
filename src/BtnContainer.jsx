const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((items, index) => {
        return (
          <button
            key={items.id}
            onClick={() => setCurrentItem(index)}
            className={index===currentItem ? 'job-btn active-btn':'job-btn'}
          >
            {items.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
