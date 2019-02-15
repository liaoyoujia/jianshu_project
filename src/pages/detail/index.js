import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import {getDetailDatas }from './store/actionCreator'
import {DetailBox,DetailTitle,DetailImg,DeatilBody,DetailItem} from './style'
class Detail extends Component {


    render() {
        
        const {detailData}=this.props
        return <DetailBox>
           <DetailTitle>{detailData.title}</DetailTitle> 
           <DetailImg src={detailData.imgUrl}></DetailImg>
           <DeatilBody>
            <DetailItem dangerouslySetInnerHTML={{ __html: detailData.content}} ></DetailItem>    
           </DeatilBody>

        </DetailBox>
    }

    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id)
    }


1
}
const mapState=(state)=>{
    return {
        detailData:state.detail.detailListData,
    }

}
const mapActions=(dispatch)=>{
    return {
        getDetailData(id){
            dispatch(getDetailDatas(id))
        }
    }
};

export default connect(mapState,mapActions)(withRouter(Detail))
// export default connect(mapState,mapActions)(Detail)