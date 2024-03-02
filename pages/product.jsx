import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import {
  MDBCheckbox,
  MDBCol,
  MDBFile,
  MDBInput,
  MDBSwitch,
} from "mdb-react-ui-kit";

const seller = () => {
  return (
    <>
    {/* At this page, make the full function for the add product form, 
        should be fully validated using yup and flexible */}
      <PageHeader
        title={"become a Seller"}
        subTitle={"Become a seller with moda now"}
      />
      <div className="container">
        <form className="row p-5 mt-5 border">
          <MDBCol>
            <MDBInput id="form6Example1" label="First name" />
          </MDBCol>

          {/* desc */}
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Additional information"
          />

          {/* color */}
          <div className="d-flex justify-content-between">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Default checkbox"
            />
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              label="Checked checkbox"
              defaultChecked
            />
          </div>
          {/* Sizes */}
          <div className="d-flex justify-content-between">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Default checkbox"
            />
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              label="Checked checkbox"
              defaultChecked
            />
          </div>

          {/* Top */}
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Default switch checkbox input"
          />

          {/* New */}
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Default switch checkbox input"
          />

          {/* HandMade */}
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Default switch checkbox input"
          />

          {/* Stock */}
          <MDBCol>
            <MDBInput id="form6Example1" label="First name" />
          </MDBCol>
          {/* Price */}
          <MDBCol>
            <MDBInput id="form6Example1" label="First name" />
          </MDBCol>

          {/* discount*/}
          <MDBCol>
            <MDBInput id="form6Example1" label="First name" />
          </MDBCol>

          {/* mainImg */}
          <MDBFile label="Default file input example" id="customFile" />

          {/* SubImgs */}
          <MDBFile
            label="Default file input example"
            id="formFileMultiple"
            multiple
          />

          {/* Category */}
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          {/* Brand */}
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <button type="button" className="btn btn-primary col-3 m-auto">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default seller;
