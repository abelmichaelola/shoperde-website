import React, { Component } from "react";
import { Feature, FeatureValue } from "../../../Models/Product";
import styles from "./FeatureView.module.scss";

interface Props {
  feature: Feature;
}

interface State {
  feature: Feature;
  activeFeatureId?: number;
  activeRefId:number;
}

export class FeatureView extends Component<Props, State> {
  featureItemsViews: any;
  featureItemsViewsRefs: any[];

  itemClickHandler = (id: number,refId: number) => {
    this.setState({
      activeFeatureId: id,
  activeRefId:refId
    });
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      feature: props.feature,
      activeFeatureId: props.feature.id,
      activeRefId: 0,
    };
    this.featureItemsViewsRefs = [];
    this.featureItemsViews = this.state.feature.values?.map(
      (value: FeatureValue, index: number) => {
        var featureItemsViewsRefsId:number = this.featureItemsViewsRefs.push(React.createRef()) - 1;
        if (this.state.activeFeatureId === value.id) {
          
    this.state = {
      feature: props.feature,
      activeFeatureId: props.feature.id,
      activeRefId: featureItemsViewsRefsId,
    };
        }
        return (
          <FeatureItemView
            key={index}
            featureValue={value}
            ref={this.featureItemsViewsRefs[featureItemsViewsRefsId]}
            refId={featureItemsViewsRefsId}
            activeFeatureId={this.state.activeFeatureId}
            itemClickHandler={this.itemClickHandler}
          />
        );
      }
    
    );
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    if (nextState.activeFeatureId !== undefined) {
      if (this.featureItemsViewsRefs[nextState.activeRefId] !== null) {
        this.featureItemsViewsRefs[nextState.activeRefId].current.setActive();
      }
      if (this.featureItemsViewsRefs[this.state.activeRefId] !== null) {
        this.featureItemsViewsRefs[this.state.activeRefId].current.setInActive();
      }
    }
    return true;
  }

  render() {
    return (
      <div className={styles.FeatureView}>
        <fieldset className={styles.inactive}>
          <legend>{this.props.feature.name}</legend>
          {this.featureItemsViews}
        </fieldset>
      </div>
    );
  }
}

interface FeatureItemViewProps {
  featureValue: FeatureValue;
  activeFeatureId?: number;
  itemClickHandler: Function;
  refId: number;
}

interface FeatureItemViewState {
  featureValue: FeatureValue;
  isActive: boolean;
}

class FeatureItemView extends Component<
  FeatureItemViewProps,
  FeatureItemViewState
> {
  constructor(props: FeatureItemViewProps) {
    super(props);
    this.state = {
      featureValue: props.featureValue,
      isActive: props.activeFeatureId === props.featureValue.id ? true : false,
    };
  }

  shouldComponentUpdate(
    nextProps: Readonly<FeatureItemViewProps>,
    nextState: Readonly<FeatureItemViewState>,
    nextContext: any
  ) {
    return true;
  }
  setInActive(){
    this.setState({
      isActive: false,
    });
  }
  setActive() {
    this.setState({
      isActive: true,
    });
  }

  render() {
    return (
      <div
        className={
          this.state.isActive ? styles.Item + " " + styles.active : styles.Item
        }
        onClick={() => {
          this.props.itemClickHandler(
            this.props.featureValue.id,
            this.props.refId
          );
        }}
      >
        {this.props.featureValue.value}
      </div>
    );
  }
}

export default FeatureView;
