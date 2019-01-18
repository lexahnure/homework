import Editable from '../../components/editable';
import { getProduct, requestUpdateProduct } from 'services';
import './product.scss';

class Product extends Component {
  state = {
    prodInfo: undefined
  }

  componentDidMount() {
    const { match } = this.props;
    getProduct(match.params.id)
      .then(prodInfo => this.setState({ prodInfo }));
  }

  setNewInfo = (prodInfo) => {
    this.setState({ prodInfo });
  }

  updtaeAndBackToProducts = (prodInfo) => {
    const { history } = this.props;
    requestUpdateProduct(prodInfo);
    history.push('/products');
  }

  render() {
    const { prodInfo = {} } = this.state;
    
    return (
      <div className="product card">
        <h2>
          Title: <Editable text={prodInfo.title} el={prodInfo} callback={this.setNewInfo} />
        </h2>
        <h4>
          price, $: <Editable text={prodInfo.price} />
        </h4>
        <span><img alt="" src={prodInfo.image ? prodInfo.image : './images/holder.png'} /></span>
        <p>
          <Editable text={prodInfo.description} multiline />
        </p>
        <input type="button" value="Save" onClick={() => this.updtaeAndBackToProducts(prodInfo)} />
      </div>
    );
  }
}

export default Product;
