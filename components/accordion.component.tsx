import { Component } from "react";

type AccordionProps = { content: IAccordionContent };
type AccordionItemState = { active: boolean };

export default class Accordion extends Component<AccordionProps> {
  render() {
    return (
      <div className={`accordionContainer`}>
        {this.props.content.items.map((item, index) => {
          return <AccordionItem item={item} key={index} />;
        })}
      </div>
    );
  }
}

type AccordionContentProps = { item: IAccordionItem };

class AccordionItem extends Component<
  AccordionContentProps,
  AccordionItemState
> {
  constructor(props: AccordionContentProps) {
    super(props);
    this.state = { active: false };
  }
  render() {
    return (
      <div onClick={() => this.switchState()} className={`accordionItem`}>
        <h4 className={`accordionItemTitle`}>{this.props.item.title}</h4>
        {this.state.active ? (
          <p className={`accordionItemContent`}>{this.props.item.content}</p>
        ) : (
          ""
        )}
      </div>
    );
  }

  switchState() {
    this.setState({active: !this.state.active})
  }
}

export interface IAccordionContent {
  items: IAccordionItem[];
}

export interface IAccordionItem {
  title: string;
  content: JSX.Element | string;
}
