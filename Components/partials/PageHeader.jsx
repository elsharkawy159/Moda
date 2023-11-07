
const PageHeader = ({title, subTitle, bg}) => {
  return (
    <div
      className="page-header text-center py-5"
      style={{ backgroundImage: `url(${bg || "img/WhiteBG.jpg"})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div className="container">
        <h2 className="text-center d-flex flex-column text-uppercase m-0 text-main fw-semibold">
          {title}
        </h2>
          <span>{subTitle}</span>
      </div>
    </div>
  );
};

export default PageHeader;
