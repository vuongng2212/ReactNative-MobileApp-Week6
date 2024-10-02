import { Text, StyleSheet, Button, View, Image, FlatList } from 'react-native';
import arrow_left from './assets/ant-design_arrow-left-outlined.png';
import cart from './assets/bi_cart-check.png';
import caNauLau from './assets/ca_nau_lau.png';
import gaBoToi from './assets/ga_bo_toi.png';
import xeCanCau from './assets/xa_can_cau.png';
import doChoiMH from './assets/do_choi_dang_mo_hinh.png';
import hieuLongConTre from './assets/hieu_long_con_tre.png';
import lanhDaoGianDon from './assets/lanh_dao_gian_don.png';
import rec1 from './assets/Rectangle1.png';

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẫu, nấu mì mini...',
    img_url:caNauLau,
    shop:'Shop DeVang'
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    img_url:gaBoToi,
    shop:'Shop LDTFood'
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    img_url:xeCanCau,
    shop:'Shop Thể giới đồ chơi'
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    img_url:doChoiMH,
    shop:'Shop Thể giới đồ chơi'
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    img_url:hieuLongConTre,
    shop:'Shop Minh Long Book'
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    img_url:lanhDaoGianDon,
    shop:'Shop Minh Long Book'
  },
];


const Item = ({title, img_url, shop}) => (
  <View style={styles.content}>
    <Image source={img_url} style={styles.IMGContent}/> 
    <View style={{marginTop:15}}>
      <Text>{title}</Text>
      <Text style={{color:'#F31111'}}>{shop}</Text>
    </View>
    <View style={{marginTop:15}}>
      <Image source={rec1}/>
      <Text style={styles.viewChatRec}>
        Chat
      </Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={arrow_left} style={styles.insideHeader}/>
        <Text style={styles.insideHeader}>Chat</Text>
        <Image source={cart} style={styles.insideHeader}/>
      </View>
      <View style={{margin:15}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} img_url={item.img_url} shop={item.shop} />} // Truyền cả img_url
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',

  },
  insideHeader: {
    marginTop: 5,
    marginBottom: 5,
    color:'#FFFFFF',
  },
  content:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  IMGContent:{
    width:80,
    height:80,
  },
  viewChatRec:{
    position: 'absolute', 
    top: 8, left: 30, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    color:'#FFFFFF'
  },
});
