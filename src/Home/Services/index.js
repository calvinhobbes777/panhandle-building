import React, { Component } from "react";
import glamorous from "glamorous";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class Services extends Component {
  state = { modalOpen: false, modalOpen2: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleOpen2 = () => this.setState({ modalOpen2: true });

  handleClose2 = () => this.setState({ modalOpen2: false });

  render() {
    return (
      <Box id="services">
        <Head2>Services</Head2>
        <ServiceRow>
          <ServiceBoxContainer>
            <ServiceBox bgImg={"/images/orangeHouse.jpeg"}>
              <Head>Home</Head>
              <div className="home">
                <p>
                  A standard home inspection consists of a thorough check of:
                </p>
                <h4>HOME EXTERIOR</h4>
                <p className="pharo">
                  We will inspect exterior siding and any attached porches,
                  balconies or decks to determine that they are sturdy and
                  undamaged. We will also inspect driveways, sidewalks and
                  patios. We will inspect the quality of the surface drainage,
                  as well as any vegetation or grading issues that may cause
                  trouble for the structure.
                </p>
                <h4>ROOFING</h4>{" "}
                <p className="pharo">
                  A roofing inspection is meant to determine the condition of
                  the roof itself as well as its drainage system. The largest
                  factor that will impact a roof’s effectiveness is the age. We
                  inspect the roof for signs of aging and weathering, as well as
                  check for any individual shingles that may be damaged or
                  leaking. We will check for signs of leakage and make sure that
                  the drainage system is clear and functioning properly.
                </p>{" "}
                <h4>ATTIC</h4>{" "}
                <p className="pharo">
                  We will inspect the condition of any visible insulation in the
                  attic, as well as check for moisture or any obvious damage. We
                  will perform a thorough visual inspection for damage, cracks
                  and signs of mold. We will check roof vents to ensure they
                  have been maintained and have not been blocked by debris or
                  animal nests. We will check support beams and trusses for
                  signs of bowing, which could indicate the roof may need more
                  support. HEATING SYSTEM As part of our inspection of the
                  heating system, we are required to document the type of
                  heating system in use in the home, the method that heat is
                  distributed throughout the building and to check for common
                  problems or defects associated with the system in question. We
                  will also test the heating system by turning up the thermostat
                  and checking the response. Vents, flues and chimneys will also
                  be inspected for any obvious defects.
                </p>{" "}
                <h4>AIR CONDITIONING SYSTEM</h4>{" "}
                <p className="pharo">
                  We will perform a visual inspection of the air conditioning
                  system to ensure that all seals, lines, and visible ductwork
                  are in working order. We will check to make sure that the
                  exterior unit has been properly maintained and cleared of
                  debris. Weather permitting, the air conditioning system will
                  be tested and we will check to ensure that the system is
                  cooling properly.
                </p>{" "}
                <h4>INTERIOR PLUMBING</h4>{" "}
                <p className="pharo">
                  We will test the water supply by flushing toilets and running
                  all faucets to check for leaks and to make sure there is an
                  appropriate amount of water pressure. We will examine drainage
                  pipes for signs of past leakage. We will also inspect the
                  water heater and examine pipes for signs of rust or corrosion.
                  Finally, we will check around toilets, sinks, showers and
                  major appliances for any sign of cracked or warped flooring
                  that could be the result of frequent leaks or spills.
                </p>{" "}
                <h4>ELECTRICAL SYSTEM</h4>{" "}
                <p className="pharo">
                  A properly functioning electrical system in a home is critical
                  for the safety of the residents, as electrical system problems
                  are responsible for thousands of house fires every year. We
                  will examine the electrical service panel for signs of age,
                  wear and damage, and ensure that it is using components that
                  are up to current safety standards. We will inspect switches
                  to make sure that they are functioning and inspect outlets to
                  make sure they are properly wired and have no signs of
                  previous short circuits or unusual heating. We will also test
                  to make sure that your electrical system is properly grounded.
                </p>{" "}
                <h4>HOME INTERIOR</h4>{" "}
                <p className="pharo">
                  We will inspect floors, ceilings and walls for water damage or
                  sagging. We will inspect staircases and railings to make sure
                  they are safe, and will check the condition and operation of
                  windows and doors. We will also assess the condition of all
                  countertops, cabinets and any appliances that will be sold
                  with the home. Finally, we will check the operation and
                  condition of the garage door and garage door opener.
                </p>
                <Modal
                  trigger={<Button onClick={this.handleOpen}>Prices</Button>}
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  basic
                  size="small"
                >
                  <Header icon="money" content="Home Inspection Pricing" />
                  <Modal.Content>
                    <PriceList>
                      <List>
                        <Head4>Condominiums(interior)</Head4>
                        <Price>$275</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>
                          Condominiums to 1,000 sq ft (incl. exterior)
                        </Head4>
                        <Price>$325</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes up to 1,500 sq ft</Head4>
                        <Price>$375</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes 1,500 to 3,000 sq ft</Head4>
                        <Price>$425</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes 3,000 to 4,000 sq ft</Head4>
                        <Price>$475</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes Over 4,000 sq ft</Head4>
                        <Price>Custom Price</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Additional living space/guest apartment</Head4>
                        <Price>$175</Price>
                      </List>
                    </PriceList>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="green" onClick={this.handleClose} inverted>
                      <Icon name="checkmark" /> Got it
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </ServiceBox>
          </ServiceBoxContainer>
          <ServiceBoxContainer>
            <ServiceBox bgImg={"/images/commercial.jpeg"}>
              <Head>Commercial</Head>
              <div className="commercial">
                <p>
                  A standard home inspection consists of a thorough check of:
                </p>
                <h4>Building Structure</h4>
                <p className={"pharo"}>
                  The precise details of an inspection of a commercial building
                  will depend on the building’s age, size, location and
                  complexity. An inspection of a building's structure ensures
                  that the building is in good condition and includes an
                  analysis of the concrete, wood and steel components.
                  Inspectors pay particular attention to the condition of the
                  roof, especially if the building is old.
                </p>
                <h4>Fire</h4>
                <p className={"pharo"}>
                  All commercial buildings must have fire safety routes and
                  comprehensive fire suppression systems. Inspectors assess fire
                  escapes, sprinkler systems and fire extinguishers and check
                  whether they are in good operational order and accessible for
                  all building users.
                </p>
                <h4>Heating and Ventilation</h4>
                <p className={"pharo"}>
                  Building inspectors assess and test the heating and
                  ventilation systems in place in a commercial building to
                  ensure that they comply with state and federal codes and
                  regulations. Replacing a heating or ventilation system can be
                  costly, so any potential owner or user of a commercial
                  building should seek reassurance that these systems are in
                  good working order.
                </p>
                <h4>Electrical System</h4>
                <p className={"pharo"}>
                  The electrical system in place must provide a safe and
                  effective power supply that is fit for the purpose of the
                  building. Commercial buildings may change use over time and an
                  inspector can assess whether the electrical system is
                  appropriate for the current or proposed use.
                </p>
                <h4>Local Codes</h4>
                <p className={"pharo"}>
                  Each state has its own local codes and regulations regarding
                  commercial buildings in its jurisdiction. Many of these relate
                  to specific geographical or climatic conditions in the
                  particular state and require that buildings be adequately
                  protected. Environmental codes may also contain stipulations
                  relating to specific materials, insulation or energy
                  efficiency.
                </p>
                <Modal
                  trigger={<Button onClick={this.handleOpen2}>Prices</Button>}
                  open={this.state.modalOpen2}
                  onClose={this.handleClose2}
                  basic
                  size="small"
                >
                  <Header
                    icon="money"
                    content="Commercial Inspection Pricing"
                  />
                  <Modal.Content>
                    <PriceList>
                      <List>
                        <Head4>Condominiums(interior)</Head4>
                        <Price>$275</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>
                          Condominiums to 1,000 sq ft (incl. exterior)
                        </Head4>
                        <Price>$325</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes up to 1,500 sq ft</Head4>
                        <Price>$375</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes 1,500 to 3,000 sq ft</Head4>
                        <Price>$425</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes 3,000 to 4,000 sq ft</Head4>
                        <Price>$475</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Homes Over 4,000 sq ft</Head4>
                        <Price>Custom Price</Price>
                      </List>
                      <hr />
                      <List>
                        <Head4>Additional living space/guest apartment</Head4>
                        <Price>$175</Price>
                      </List>
                    </PriceList>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="green" onClick={this.handleClose2} inverted>
                      <Icon name="checkmark" /> Got it
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </ServiceBox>
          </ServiceBoxContainer>
        </ServiceRow>
      </Box>
    );
  }
}

const Box = glamorous.div({
  padding: "30px",
  backgroundColor: "#607b7d"
});

const Head2 = glamorous.h2({
  padding: "16px 0px",
  color: "white"
});

const Head = glamorous.h2({
  padding: "16px 0px",
  backgroundColor: "rgba(255, 255, 255, 0.5)"
});

const mediaQuery = "@media screen and (max-width: 900px)";

const ServiceRow = glamorous.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  [mediaQuery]: {
    flexDirection: "column"
  }
});

const ServiceBoxContainer = glamorous.div({
  padding: "12px",
  width: "100%"
});

const ServiceBox = glamorous.div(props => ({
  position: "relative",
  width: "100%",
  height: "350px",
  color: "black",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: ` url('${props.bgImg}')`,
  transition: "all .2s ease-in-out",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
  borderRadius: "5px",
  "& .home, .commercial ": {
    transition: "all .2s ease-in-out",
    opacity: 0,
    overflow: "scroll"
  },
  ":hover": {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)), url('${
      props.bgImg
    }')`,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
    "& .home, .commercial ": {
      transform: "scale(1.01)",
      opacity: 1
    }
  }
}));

const PriceList = glamorous.div({
  height: "100%",
  width: "100%"
});

const List = glamorous.div({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-between"
});

const Head4 = glamorous.h4({
  padding: "21px"
});

const Price = glamorous.div({
  padding: "21px"
});
export default Services;
