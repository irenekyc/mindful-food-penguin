import React, { Component } from "react";
import style from "./feature.module.css";
import FeatureCard from "./FeatureCard.js";
import data from "../../data/static.json";

class features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReady: false,
      details: null,
      dataError: false,
    };
    this.fetchDetails = async () => {
      this.setState({
        dataReady: true,
        details: data.data,
      });
    };
  }

  componentDidMount() {
    if (!this.state.dataReady) {
      this.fetchDetails();
    }
  }

  render() {
    return (
      <section className={style.FeatureSection}>
        <h1 className={style.SectionTitle}> Mind your...</h1>
        <div className={style.FeatureDiv}>
          {this.state.dataReady
            ? this.state.details.map((feature) => {
                return <FeatureCard key={feature.details.id} topic={feature} />;
              })
            : null}
        </div>
      </section>
    );
  }
}

export default features;
