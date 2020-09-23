// import React from "react";
import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/";
import { Table } from "@material-ui/core/";
import { TableBody } from "@material-ui/core/";
import { TableCell } from "@material-ui/core/";
import { TableContainer } from "@material-ui/core/";
import { TableHead } from "@material-ui/core/";
import { TableRow } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";

import { List } from "@material-ui/core/";
import { ListItem } from "@material-ui/core/";
import { Divider } from "@material-ui/core/";
import { ListItemText } from "@material-ui/core/";
import { ListItemAvatar } from "@material-ui/core/";
import { Avatar } from "@material-ui/core/";
import { Typography } from "@material-ui/core/";

import { getOfertasEmpleo } from "./crudLandingPage";
import InfiniteScroll from "react-infinite-scroller";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    fontWeight: 500,
  },
  table: {
    minWidth: 650,
    span: {
      fontSize: 5,
    },
  },
  cell: {
    fontSize: "1.2rem",
  },
  span: {
    fontSize: 5,
  },
  listItem: {
    fontSize: "1.2rem",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function FlagJornada(props) {
  switch (props.jornada) {
    case "tiempoCompleto":
      return (
        <span className="job-type cl-success bg-trans-success">
          Tiempo Completo
        </span>
      );

    default:
      break;
  }
}

function ejemplo() {
  console.log("scroll");
}

export function LandingPage() {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState([]);

  // const dataTable;
  useEffect(() => {
    // Update the document title using the browser API
    // dataTable = `You clicked ${dataTable} times`;
    getOfertasEmpleo()
      .then(({ data: { data } }) => {
        // setDataTable(JSON.stringify(data));
        setDataTable(data);

        // disableLoading();
        // props.login(user.token); //? que pasa aca??
      })
      .catch((err) => {
        // disableLoading();
        // setSubmitting(false);
        // setStatus(
        //   intl.formatMessage({
        //     id: "AUTH.VALIDATION.INVALID_LOGIN",
        //   })
        // );
      });
  }, []);

  return (
    <div className="card card-custom">
      {/* {dataTable} */}
      {/* <div className="card-header flex-wrap border-0 pt-6 pb-0">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Ofertas Laborales
          </span>
          <span className="text-muted mt-1 font-weight-bold font-size-sm">
            Encuentra tu destino profesional
          </span>
        </h3>
      </div>
      <div className="card-body">
        <div className="mb-10">
          <div className="row align-items-center">
            <div className="col-lg-9 col-xl-8">
              <div className="row align-items-center">
                <div className="col-md-4 my-2 my-md-0">
                  <div className="input-icon">
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      placeholder="Search..."
                      id="kt_datatable_search_query"
                    />
                    <span>
                      <i className="flaticon2-search-1 text-muted"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 my-2 my-md-0">
                  <select
                    className="form-control form-control-solid"
                    id="kt_datatable_search_status"
                  >
                    <option value="">Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Delivered</option>
                    <option value="3">Canceled</option>
                  </select>
                </div>
                <div className="col-md-4 my-2 my-md-0">
                  <select
                    className="form-control form-control-solid"
                    id="kt_datatable_search_type"
                  >
                    <option value="">Type</option>
                    <option value="4">Success</option>
                    <option value="5">Info</option>
                    <option value="6">Danger</option>
                  </select>
                </div>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table
                className={classes.table + " datatable-table"}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTable.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.cell + " ffff"}
                      >
                        {row.descripcion}
                      </TableCell>
                      <TableCell align="right">{row.fecPublicacion}</TableCell>
                      <TableCell align="right">{row.fecVencimiento}</TableCell>
                      <TableCell align="right">{row.jornada}</TableCell>
                      <TableCell align="right">{row.titulo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <h1>Hola amigos!</h1>
      </div>
      <List className={classes.root}>
        {dataTable.map((data, index) => (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="h5"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {data.descripcion}
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
              xx
              {index}
            </ListItem>

            {index < dataTable.length - 1 ? (
              <Divider variant="inset" component="li" />
            ) : (
              "nada"
            )}
          </div>
        ))}
      </List> */}

      {/* <!-- ========== Begin: Brows job ===============  --> */}
      <section>
        <div className="container">
          {/* <!-- Company Searrch Filter Start --> */}
          <div className="row extra-mrg">
            <div className="wrap-search-filter">
              <form>
                <div className="col-md-4 col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Keyword: Name, Tag"
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location: City, State, Zip"
                  />
                </div>
                <div className="col-md-3 col-sm-3">
                  <select className="form-control" id="j-category">
                    <option value="">&nbsp;</option>
                    <option value="1">Information Technology</option>
                    <option value="2">Mechanical</option>
                    <option value="3">Hardware</option>
                    <option value="4">Hospitality & Tourism</option>
                    <option value="5">Education & Training</option>
                    <option value="6">Government & Public</option>
                    <option value="7">Architecture</option>
                  </select>
                </div>
                <div className="col-md-2 col-sm-2">
                  <button type="submit" className="btn btn-primary full-width">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Company Searrch Filter End --> */}

          <InfiniteScroll //! continuar aqui https://www.npmjs.com/package/react-infinite-scroller
            pageStart={0}
            loadMore={ejemplo}
            hasMore={true || false}
            loader={
              <div className="loader" key={0}>
                fLoading ...
              </div>
            }
          >
            {dataTable.map((data, index) => (
              <div className="item-click" key={index}>
                <article>
                  <div className="brows-job-list">
                    <div className="col-md-6 col-sm-6">
                      <div className="item-fl-box">
                        <div className="brows-job-company-img">
                          <a href="job-detail.html">
                            <img
                              src="assets/img/com-1.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="brows-job-position">
                          <h3>
                            <a href="job-apply-detail.html">{data.titulo}</a>
                          </h3>
                          <p>
                            <span>
                              {data.user && data.user.nombre
                                ? data.user.nombre
                                : ""}
                            </span>
                            <span className="brows-job-sallery">
                              <i className="fa fa-money"></i>$750 - 800
                            </span>
                            {/* <span className="job-type cl-success bg-trans-success">
                            {data.jornada}
                          </span> */}
                            <FlagJornada jornada={data.jornada} />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>Arequipa, C40
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-job-link">
                        <a
                          href="job-apply-detail.html"
                          className="btn btn-default"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="tg-themetag tg-featuretag">Premiumx</span>
                </article>
              </div>
            ))}
          </InfiniteScroll>

          {/* {dataTable.map((data, index) => (
            <div className="item-click" key={index}>
              <article>
                <div className="brows-job-list">
                  <div className="col-md-6 col-sm-6">
                    <div className="item-fl-box">
                      <div className="brows-job-company-img">
                        <a href="job-detail.html">
                          <img
                            src="assets/img/com-1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="brows-job-position">
                        <h3>
                          <a href="job-apply-detail.html">{data.titulo}</a>
                        </h3>
                        <p>
                          <span>
                            {data.user && data.user.nombre
                              ? data.user.nombre
                              : ""}
                          </span>
                          <span className="brows-job-sallery">
                            <i className="fa fa-money"></i>$750 - 800
                          </span>

                          <FlagJornada jornada={data.jornada} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="brows-job-location">
                      <p>
                        <i className="fa fa-map-marker"></i>Arequipa, C40
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a
                        href="job-apply-detail.html"
                        className="btn btn-default"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premiumx</span>
              </article>
            </div>
          ))} */}
          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">Compensation Analyst</a>
                      </h3>
                      <p>
                        <span>Google</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$810 - 900
                        </span>
                        <span className="job-type bg-trans-warning cl-warning">
                          Part Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">Investment Banker</a>
                      </h3>
                      <p>
                        <span>Honda</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$800 - 910
                        </span>
                        <span className="job-type bg-trans-primary cl-primary">
                          Freelancer
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </article>
          </div>

          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-4.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">Financial Analyst</a>
                      </h3>
                      <p>
                        <span>Microsoft</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$580 - 600
                        </span>
                        <span className="job-type bg-trans-success cl-success">
                          Full Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-5.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">
                          Service Representative
                        </a>
                      </h3>
                      <p>
                        <span>Autodesk</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$800 - 900
                        </span>
                        <span className="job-type bg-trans-denger cl-danger">
                          Enternship
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </article>
          </div>

          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-6.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">
                          Chief Executive Officer
                        </a>
                      </h3>
                      <p>
                        <span>Google</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$510 - 700
                        </span>
                        <span className="job-type bg-trans-success cl-success">
                          Full Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="item-click">
            <article>
              <div className="brows-job-list">
                <div className="col-md-6 col-sm-6">
                  <div className="item-fl-box">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="assets/img/com-7.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="brows-job-position">
                      <h3>
                        <a href="job-apply-detail.html">
                          Administrative Manager
                        </a>
                      </h3>
                      <p>
                        <span>Honda</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$700 - 800
                        </span>
                        <span className="job-type bg-trans-warning cl-warning">
                          Part Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-job-location">
                    <p>
                      <i className="fa fa-map-marker"></i>QBL Park, C40
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div className="brows-job-link">
                    <a href="job-apply-detail.html" className="btn btn-default">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <span className="tg-themetag tg-featuretag">Premium</span>
            </article>
          </div>

          {/* <!--/.row--> */}
          <div className="row">
            <ul className="pagination">
              <li>
                <a href="#">
                  <i className="ti-arrow-left"></i>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-ellipsis-h"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
