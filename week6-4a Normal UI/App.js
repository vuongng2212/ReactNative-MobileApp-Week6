import { Text, StyleSheet, Button, View, Image } from 'react-native';
import arrow_left from './assets/ant-design_arrow-left-outlined.png';
import cart from './assets/bi_cart-check.png';
import caNauLau from './assets/ca_nau_lau.png';
import gaBoToi from './assets/ga_bo_toi.png';
import xeCanCau from './assets/xa_can_cau.png';
import doChoiMH from './assets/do_choi_dang_mo_hinh.png';
import hieuLongConTre from './assets/hieu_long_con_tre.png';
import lanhDaoGianDon from './assets/lanh_dao_gian_don.png';
import rec1 from './assets/Rectangle1.png';

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
        <Image source={caNauLau} style={styles.IMGContent}/>
        <View>
          <Text>Ca nấu lẫu, nấu mì mini...</Text>
          <Text style={{color:'#F31111'}}>Shop Devang</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={gaBoToi} style={styles.IMGContent}/>
        <View>
          <Text>1KG KHÔ GÀ BƠ TỎI</Text>
          <Text style={{color:'#F31111'}}>Shop LDTFood</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={xeCanCau} style={styles.IMGContent}/>
        <View>
          <Text>Xe cần cẩu đa năng</Text>
          <Text style={{color:'#F31111'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={doChoiMH} style={styles.IMGContent}/>
        <View>
          <Text>Đồ chơi dạng mô hình</Text>
          <Text style={{color:'#F31111'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={lanhDaoGianDon} style={styles.IMGContent}/>
        <View>
          <Text>Lãnh đạo giản đơn</Text>
          <Text style={{color:'#F31111'}}>Shop Devang</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={hieuLongConTre} style={styles.IMGContent}/>
        <View>
          <Text>Hiểu lòng con trẻ</Text>
          <Text style={{color:'#F31111'}}>Shop Devang</Text>
        </View>
        <View>
          <Image source={rec1} style={styles.chatRec}/>
          <Text style={styles.viewChatRec}>
            Chat
          </Text>
        </View>
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
