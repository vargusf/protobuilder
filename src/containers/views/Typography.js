import React, { Component } from 'react';
import ViewStandard from './ViewStandard';
import Code from '../../components/Code';

class Buttons extends Component {
  render() {
    return (
      <ViewStandard title="Typography">
        <div className="Text--heading-3">Display Headings</div>
        <div className="Well-2 Utils--margin-ends-sm">
          <div className="Text--display-1">Display 1</div>
          <div className="Text--display-2">Display 2</div>
          <div className="Text--display-3">Display 3</div>
          <div className="Text--display-4">Display 4</div>
          <div className="Well-1 Utils--margin-ends-xsm">
            <Code
              attributes = {[
                { class: 'Text--display-1'}
              ]}
            >
              somecode
            </Code>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--display-1'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Display 1</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--display-2'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Display 2</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--display-3'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Display 3</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--display-4'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Display 4</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
          </div>
        </div>
        <div className="Text--heading-3">Paragraph Headings</div>
        <div className="Well-2 Utils--margin-ends-sm">
          <div className="Text--heading-1">Heading 1</div>
          <div className="Text--heading-2">Heading 2</div>
          <div className="Text--heading-3">Heading 3</div>
          <div className="Text--heading-4">Heading 4</div>
          <div className="Text--heading-5">Heading 5</div>
          <div className="Text--heading-6">Heading 6</div>
          <div className="Well-1 Utils--margin-ends-xsm">
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-1'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 1</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-2'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 2</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-3'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 3</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-4'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 4</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-5'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 5</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
            <div className="Code">
              <span className="Code--puncuation">{'<'}</span>
              <span className="Code--tag">{'div '}</span>
              <span className="Code--attrName">{'class'}</span>
              <span className="Code--puncuation">{'="'}</span>
              <span className="Code--attrVal">{'Text--heading-6'}</span>
              <span className="Code--puncuation">{'">'}</span>
              <span>Heading 6</span>
              <span className="Code--puncuation">{'</'}</span>
              <span className="Code--tag">{'div'}</span>
              <span className="Code--puncuation">{'>'}</span>
            </div>
          </div>
        </div>
        <div className="Text--copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, incidunt nobis ipsum qui velit dolore error quod excepturi repellat minus odio repellendus rem id quasi minima explicabo soluta, exercitationem unde. Harum laboriosam et asperiores quos esse consectetur provident aliquam impedit reprehenderit enim officia placeat reiciendis, commodi quo nam deleniti?</div>
        <div className="Well Well--code">
          Text--copy
          <br/>
          Doesn't contain any margins
        </div>
        <div className="Text--lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, incidunt nobis ipsum qui velit dolore error quod excepturi repellat minus odio repellendus rem id quasi minima explicabo soluta, exercitationem unde. Harum laboriosam et asperiores quos esse consectetur provident aliquam impedit reprehenderit enim officia placeat reiciendis, commodi quo nam deleniti?</div>
        <div className="Text--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, incidunt nobis ipsum qui velit dolore error quod excepturi repellat minus odio repellendus rem id quasi minima explicabo soluta, exercitationem unde. Harum laboriosam et asperiores quos esse consectetur provident aliquam impedit reprehenderit enim officia placeat reiciendis, commodi quo nam deleniti?</div>
        <div className="Text--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, incidunt nobis ipsum qui velit dolore error quod excepturi repellat minus odio repellendus rem id quasi minima explicabo soluta, exercitationem unde. Harum laboriosam et asperiores quos esse consectetur provident aliquam impedit reprehenderit enim officia placeat reiciendis, commodi quo nam deleniti?</div>
        <div className="Text--heading-3">Muted Text</div>
        <div className="Text--heading-1">Main Heading</div>
        <div className="Text--heading-3 Text--muted">Muted Subheading</div>
        <div className="Well Well--code">Text--heading-1</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, incidunt nobis ipsum qui velit dolore error quod excepturi repellat minus odio repellendus rem id quasi minima explicabo soluta, exercitationem unde. Harum laboriosam et asperiores quos esse consectetur provident aliquam impedit reprehenderit enim officia placeat reiciendis, commodi quo nam deleniti?</div>
      </ViewStandard>
    );
  }
}

export default Buttons;