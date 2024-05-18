/* eslint-disable react/prop-types */
function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <div>
        <div>
          <img src={image} alt="" />
          <h4 className="course-title">{title}</h4>
          <p className="course-desc">{description}</p>
          <h3 className="course-price">{price} ₺</h3>
          <div className="course-link"><a style={{textDecoration: 'none'}} href={link}>Arama yapmak için</a></div>
          
        </div>
      </div>
    </div>
  );
}

export default Course;
