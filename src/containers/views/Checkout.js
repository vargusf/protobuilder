import React, { Component } from 'react';
import ViewStandard from './ViewStandard';
import Button from '../../components/Button';

class Checkout extends Component {
  render() {
    return (
      <ViewStandard title="Checkout">
        <div>
          <div className="Checkout">
            <div className="Checkout__box Utils--margin-bottom-lg">
              <div className="Layout--row">
                <div className="Text--display-3">$</div>
                <div className="Text--display-1">79</div>
                <div className="Text--display-3 Layout--align-self-end">/mo.</div>
              </div>
              <div className="Layout--row">
                <Button>annual</Button>
                <Button>monthly</Button>
              </div>
            </div>
            <div className="Checkout__box Utils--margin-bottom-lg">
              <div className="Form__item--checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="icon"></span>
                  <div className="label"><div className="Text--display-4">Add Email - $12/mo</div></div>
                </label>
              </div>
            </div>
            <div className="Checkout__box Utils--margin-bottom-lg">
              <div className="Form__item--checkbox">
                <label>
                  <input type="checkbox" />
                  <span className="icon"></span>
                  <div className="label"><div className="Text--display-4">Add IDX Listings - $14/mo</div></div>
                </label>
              </div>
            </div>
            <div className="Checkout__box Checkout__box--payment">
              <div className="Text--heading-4">Payment Information (test)</div>
              <div className="Text--heading-6">$105 (+tax) will be charged monthly on your credit card</div>
              <div className="Text--heading-6">Billing Address: 114 Cambie, Vancouver, BC, V3J3A3 <a className="Link">edit</a></div>
              <div className="Utils--margin-top-sm">Name on Card</div>
              <input type="text" />
              <div className="Layout--row Utils--margin-ends-xsm">
                <div>
                  <div>Expiry Date</div>
                  <input type="text" />
                </div>
                <div>
                  <div>CVV2</div>
                  <input type="text" />
              </div>
              </div>
              <div>Number</div>
              <input type="text" />
              <div className="Utils--margin-ends-md"><Button><i className="material-icons">lock</i>Submit</Button></div>
              <div className="Text--font-size-xsm">30 Day Money Back Guarentee</div>
              <div className="Text--font-size-xsm">No Contracts, Cancel Anytime</div>
              <div className="Text--font-size-xsm">Data Protected with 256 bit SSL Encryption</div>
            </div>
          </div>
        </div>
      </ViewStandard>
    );
  }
}

export default Checkout;