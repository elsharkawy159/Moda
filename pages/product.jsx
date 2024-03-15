import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../Components/partials/PageHeader.jsx";
import { MDBInput, MDBFile, MDBSwitch, MDBCheckbox } from "mdb-react-ui-kit";
import Select from "react-select";
import { useProduct } from "../Context/ProductContext.js";
import { useAuth } from "../Context/AuthContext.js";
import { useCategory } from "../Context/CetegoryContext.js";

const Seller = () => {
  const [subImagesrcs, setsubImagesrcs] = useState(null);
  const [mainImageSrc, setmainImageSrc] = useState(null);
  const [priceCalc, setPriceCalc] = useState(0);
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedSubCat, setSelectedSubCat] = useState("");
  const [selectedbrandId, setSelectedbrandId] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedsize, setSelectedsize] = useState([]);
  const [ishandMade, setIshandMade] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const { createProduct, isLoading, createProductRes } = useProduct();
  const { isLoggedIn } = useAuth();
  const { categoryData } = useCategory();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    description: Yup.string()
      .required("Description is required")
      .min(1, "Description length must be more than 2 characters"),
    stock: Yup.number()
      .required("Stock is required")
      .min(0, "Stock must be at least 0")
      .max(1000, "Maximum stock is 1000"),
    price: Yup.number()
      .required("Price is required")
      .min(0, "Price must be at least 0")
      .max(1000000, "Maximum price is 1000000"),
    discount: Yup.number()
      .min(0, "Discount must be at least 0")
      .max(100, "Maximum discount is 100"),
    mainImage: Yup.mixed().required("Main image is required"),
    // subImages: Yup.array()
    //   .min(1, "At least one sub image is required")
    //   .max(5, "Maximum Sub images are 5"),
    // categoryId: Yup.string().required("categoryId is required"),
    // subcategoryId: Yup.string().required("subcategoryId is required"),
    // brandId: Yup.string().required("brandId is required"),
    // color: Yup.array()
    //   .required("Color is required")
    //   .min(1, "At least one color is required"),
    // size: Yup.array()
    //   .required("Size is required")
    //   .min(1, "At least one size is required"),
  });

  const categories = [
    { value: "654deb1f8e791ff983624b5e", label: "Men" },
    { value: "654deb148e791ff983624b5a", label: "Women" },
    { value: "654de92049f84fd2e787d0e0", label: "Kids & Baby" },
  ];

  const subCategories = [
    { value: "65983fd05c26671f3827ee54", label: "Men T-shirts" },
    { value: "6598401b5c26671f3827ee5c", label: "Women T-shirts" },
    { value: "659840315c26671f3827ee61", label: "Kids T-shirts" },
  ];
  const brandIds = [{ value: "654deccfc7b070518cde831a", label: "MODA" }];

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "gray", label: "Gray" },
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
  ];

  const sizeOptions = [
    { value: "s", label: "Small" },
    { value: "m", label: "Medium" },
    { value: "l", label: "Large" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra Large" },
    { value: "xxl", label: "XXL" },
    { value: "xxxl", label: "XXXL" },
  ];

  const handleSubmit = async (values) => {
    if (isLoggedIn) {
      const formData = {
        ...values,
        // colors: selectedColors.map((color) => color.value),
        // size: selectedsize.map((size) => size.value),
        categoryId: selectedCat?.value,
        subcategoryId: selectedSubCat?.value,
        brandId: selectedbrandId?.value,
        handMade: ishandMade,
        new: isNew,
        top: isTop,
      };
      await createProduct(formData);
      console.log(createProductRes);
    }
  };

  const handlePrice = ({ price, discount }) => {
    const finalPrice = price - (price * discount) / 100;
    setPriceCalc(finalPrice);
  };

  return (
    <>
      <PageHeader
        title={"Add A Product"}
        subTitle={"Become a seller with moda now"}
      />
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            description: "",
            colors: [],
            size: [],
            top: false,
            new: false,
            handMade: false,
            stock: "",
            price: "",
            discount: "",
            mainImage: "",
            // subImages: "",
            categoryId: "",
            subcategoryId: "",
            brandId: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="row p-md-5 p-2 mt-5 border shadow-sm">
              <div className="col-md-12 mb-3 pb-5">
                <MDBFile
                  name="mainImage"
                  label="Main Image"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      formik.setFieldValue("mainImage", file);
                      const reader = new FileReader();
                      reader.onload = () => {
                        setmainImageSrc(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <div className="product-grid">
                  <div className="product-image col-md-4 m-auto mt-3">
                    {mainImageSrc && (
                      <img
                        src={mainImageSrc}
                        className="border p-1 rounded-2 w-100 "
                        width={1}
                        alt="Main Image"
                      />
                    )}
                    {isTop && (
                      <span className="product-sale-label">
                        {isTop ? "TOP" : ""}
                      </span>
                    )}
                    {isNew && (
                      <span className="product-new-label">
                        {isNew ? "NEW" : ""}
                      </span>
                    )}
                    {formik.values.discount > 0 ? (
                      <span className="product-discount-label">
                        -{formik.values.discount}%
                      </span>
                    ) : null}
                  </div>
                  <ErrorMessage
                    name="mainImage"
                    component="div"
                    className="text-danger text-sm"
                  />
                </div>
                {createProductRes.success ? (
                  <p className="text-center text-success fw-bold mb-0 mt-2">
                    {createProductRes.message} ✅
                  </p>
                ) : (
                  <p className="text-center text-danger fw-bold mb-0 mt-2">
                    {createProductRes.message}
                  </p>
                )}
              </div>
              <div className="mb-4 col-md-9">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  as={MDBInput}
                  label="Product Name"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="mb-3 col-md-3">
                <Field
                  type="number"
                  name="stock"
                  id="stock"
                  as={MDBInput}
                  label="Stock"
                />
                <ErrorMessage
                  name="stock"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="mb-4">
                <Field
                  as={MDBInput}
                  textarea
                  name="description"
                  id="description"
                  rows={4}
                  label="Description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="col-md-4 mb-3">
                <Select
                  value={selectedCat}
                  onChange={setSelectedCat}
                  options={categories}
                  placeholder="Category"
                  name="categoryId"
                />
                <ErrorMessage
                  name="categoryId"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="col-md-4 mb-3">
                <Select
                  value={selectedSubCat}
                  onChange={(option) => setSelectedSubCat(option)}
                  options={subCategories}
                  placeholder="Sub Category"
                  name="subcategoryId"
                />
                <ErrorMessage
                  name="subcategoryId"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="col-md-4 mb-4">
                <Select
                  value={selectedbrandId}
                  onChange={(option) => setSelectedbrandId(option)}
                  options={brandIds}
                  placeholder="Brand"
                  name="brandId"
                />
                <ErrorMessage
                  name="brandId"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="d-flex w-100 justify-content-evenly flex-wrap mb-4">
                <MDBCheckbox
                  name="handMade"
                  checked={ishandMade}
                  id="handMade"
                  onChange={(e) => setIshandMade(e.target.checked)}
                  label="handMade"
                />
                <MDBCheckbox
                  name="top"
                  checked={isTop}
                  id="top"
                  onChange={(e) => setIsTop(e.target.checked)}
                  label="Top"
                />
                <MDBCheckbox
                  name="new"
                  checked={isNew}
                  id="new"
                  onChange={(e) => setIsNew(e.target.checked)}
                  label="New"
                />
              </div>
              <hr />

              {/* <div className="col-md-6 mb-4">
                <MDBFile
                  name="subImages"
                  label="Sub Images"
                  accept="image/*"
                  multiple
                  maxFiles={5}
                  onChange={(event) => {
                    const files = Array.from(event.currentTarget.files);
                    if (files.length > 0) {
                      formik.setFieldValue("subImages", files);
                      setsubImagesrcs(
                        files.map((file) => URL.createObjectURL(file))
                      );
                    }
                  }}
                />
                <div className="d-flex my-1 justify-content-center flex-wrap">
                  {subImagesrcs?.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      className="border p-2 rounded-2"
                      width={150}
                      alt={`Sub Image ${index}`}
                    />
                  ))}
                </div>
                <ErrorMessage
                  name="subImages"
                  component="div"
                  className="text-danger text-sm"
                />
              </div> */}
              <hr />
              <div className="col-md-6 mb-4">
                <Select
                  value={selectedColors}
                  onChange={(options) => setSelectedColors(options)}
                  options={colorOptions}
                  placeholder="Colors"
                  name="colors"
                  isMulti
                />
                <ErrorMessage
                  name="colors"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="col-md-6 mb-4">
                <Select
                  value={selectedsize}
                  onChange={(options) => setSelectedsize(options)}
                  options={sizeOptions}
                  placeholder="size"
                  name="size"
                  isMulti
                />
                <ErrorMessage
                  name="size"
                  component="div"
                  className="text-danger text-sm"
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-4">
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    as={MDBInput}
                    label="Price (EGP)"
                    onChange={(e) => {
                      formik.handleChange(e); // Handle Formik's handleChange event
                      handlePrice({
                        price: e.target.value,
                        discount: formik.values.discount,
                      }); // Calculate final price
                    }}
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-danger text-sm"
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <Field
                    name="discount"
                    type="number"
                    min={0}
                    max={100}
                    id="discount"
                    as={MDBInput}
                    label="Discount %"
                    onChange={(e) => {
                      formik.handleChange(e); // Handle Formik's handleChange event
                      handlePrice({
                        price: formik.values.price,
                        discount: e.target.value,
                      }); // Calculate final price
                    }}
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-danger text-sm"
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <Field
                    type="number"
                    name="finalPrice"
                    min={0}
                    id="finalPrice"
                    as={MDBInput}
                    disabled
                    value={priceCalc}
                  />
                </div>
              </div>
              {isLoading ? (
                <button
                  type="submit"
                  className="btn btn-moda col-10 my-4 m-auto border"
                >
                  <i className="fa-solid fa-spinner fa-spin fs-5 m-0 text-light"></i>
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-moda col-10 my-4 m-auto border"
                >
                  Add Product
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Seller;
