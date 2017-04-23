import React, {Component} from 'react'
import './reset.css'
import Shutter from './component/redux/Shutter'
import Slider from './component/Slider'
import Main from './component/Main'
import Pl from './component/pl'
import Solution from './component/Solution'
import Service from './component/Service'
import FootItem from './component/FootItem'
import SolutionSliderWrap from './component/solutionSliderWrap'
import './App.css'

class App extends Component {
	render() {
	  let shutterData1 = {
	  	theme: '弹性计算',
	  	advantage: '专业、安全、稳定',
	  	icon: 'iconfont icon-yun',
	  	items: [{item: '云主机', description: '稳定安全的弹性计算服务'},
	  	{item: '镜像', description: '多种安全可靠的云计算服务镜像'},
	  	{item: '安全组', description: '安全可靠的网络访问控制'},
	  	{item: 'SSH密钥', description: '更安全的主机登录方式'},
	  	{item: '云硬盘', description: '高性能的、弹性块存储服务'}]
	  }
	  let shutterData2 = {
	  	theme: '网络',
	  	advantage: '快速、灵活、可靠',
	  	icon: 'iconfont icon-wangluo',
	  	items: [{item: '私有网络', description: '安全隔离的网络空间,灵活部署'},
	  	{item: '子网', description: '构建逻辑隔离的专有网络'},
	  	{item: '路由表', description: '轻松创建专属的局域网络'},
	  	{item: '公网IP', description: '弹性互联网地址,为不同资源提供公网访问'},
	  	{item: '负载均衡', description: '实现访问流量安全合理分配'}]
	  }
	  let shutterData3 = {
	  	theme: '存储与CDN',
	  	advantage: '海量、高效、便捷',
	  	icon: 'iconfont icon-chucunshebei',
	  	items: [{item: '云数据库', description: '可靠易用免维护的数据服务'},
	  	{item: '云缓存', description: '高性能、易扩展的缓存服务'},
	  	{item: '对象存储', description: '大规模分布式对象存储服务'},
	  	{item: 'DDoS防护', description: '抵御大规模DDoS攻击，保证用户安全'},
	  	{item: '云监控', description: '立体化云产品数据监控，实时预警，稳定安全'}]
	  }
	  let shutterData4 = {
	  	theme: '大数据',
	  	advantage: '让使用数据的门槛降到最低',
	  	icon: 'iconfont icon-xianshiqi2',
	  	items: [{item: '数据集成', description: '数据灵活同步，清除本地和云端数据孤岛'},
	  	{item: '数据仓库', description: '全托管、低使用成本的PB级数据仓库'},
	  	{item: 'BI报表', description: '轻松上手大数据分析，快速实现可视化'},
	  	{item: 'JMR', description: '全托管的Hadoop/Spark数据集群服务'}]
	  }
	  let sliderData = [
	    {
	      link: 'http://www.jcloud.com/activ/number1host.html',
	      leftArea: {
	      	h: '',
	      	p: '',
	      	span: false
	      },
	      rightArea: (
	      	<div className='center-box' key={1}>
	      	  <img src="http://www.jcloud.com.c-bj.jcloud.com/cms/5896a09e-1f07-4655-b955-85df4f3257ba20170407181143.png"/>
	      	</div>
	      ),
	      style: {
	        background: 'url(http://www.jcloud.com.c-bj.jcloud.com/cms/be176f05-5e27-413a-b2cc-e8f37566004620170407181129.png) no-repeat rgb(0, 37, 71)'
	      }
	    },
	    {
	      link: 'http://www.jcloud.com/products/channel.html',
	      leftArea: {
	      	h: '',
	      	p: '',
	      	span: false
	      },
	      rightArea: (
	      	<div className='center-box' key={2}>
	      	   <img src="http://www.jcloud.com.c-bj.jcloud.com/cms/ef0aa323-d861-4ee3-bf76-8304e1d5ec2120170410112122.png"/>
	      	</div>
	      ),
	      style: {
	      	background: 'url(http://www.jcloud.com.c-bj.jcloud.com/cms/f73d9e1d-ee41-402b-a884-0429f92de1f420170410112927.jpg)'
	      }
	    },
	    {
	      link: 'http://www.jcloud.com/activ/number1host.html',
	      leftArea: {
	      	h: '香港地区主机再次降价',
	      	p: '降价高达20%',
	      	span: true
	      },
	      rightArea: (
	        <div>
	      	  <div className='img-box slow' key={1}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/bc3904cc-6488-46b8-829c-bbbc191856da20170320185722.png'/>
	      	  </div>
	          <div className='img-box fast' key={2}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/3ec88eb3-a4c1-4aa7-893b-48800882ecec20170320185717.png'/>
	      	  </div>
	      	</div>
	      ),
	      style: {
	        background: '#1A284E'
	      },
	    },
	    {
	      link: 'http://www.jcloud.com/activ/number1host.html',
	      leftArea: {
	      	h: '免费试用、上云无忧',
	      	p: '新用户专享福利、认证即送代金卷',
	      	span: true
	      },
	      rightArea: (
	        <div>
	      	  <div className='img-box slow' key={3}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/3b76aa14-d1f6-4909-ba27-a3d87312732f20170308155343.png'/>
	      	  </div>
	          <div className='img-box fast' key={4}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/2741e57c-a878-4faa-870c-57b84a48bc9d20170308155348.png'/>
	      	  </div>
	      	</div>
	      ),
	      style: {
	        background: '#1A284E'
	      }
	    },
	    {
	      link: 'http://www.jcloud.com/activ/number1host.html',
	      leftArea: {
	      	h: '云贸电商B2B系统免费试用',
	      	p: '秒级搭建属于你的电商网站',
	      	span: true
	      },
	      rightArea: (
	      	<div>
	      	  <div className='img-box slow' key={5}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/24310dd5-5372-4ab3-aa8d-29f563662d7c20170109152220.png'/>
	      	  </div>
	          <div className='img-box fast' key={6}>
	      	    <img src='http://www.jcloud.com.c-bj.jcloud.com/cms/09b413a0-b7b1-4b16-867a-ff0efc2098b920170109152213.png'/>
	      	  </div>
	      	</div>
	      ),
	      style: {
	        background: '#1A284E'
	      }
	    }
	    ]

	    let plData1 = {
	      bg: "//www.jcloud.com/home/images/item_bg.png",
	      rotate: "//www.jcloud.com/home/images/pl_rotate.png",
	      logo: "//www.jcloud.com/home/images/pl_icon2.png",
	      icons: ["//www.jcloud.com/home/images/pl_icon1.png", "//www.jcloud.com/home/images/pl_icon2.png"],
	      style: {background: '#09acc4'},
	      title: '京东万象',
	      p: '提供海量的API、数据包及数据报告开放流通服务,提供专属的报告、指数等数据定制服务。'
	    }

	    let plData2 = {
	      bg: "//www.jcloud.com/home/images/item_bg.png",
	      rotate: "//www.jcloud.com/home/images/pl_rotate.png",
	      logo: "http://www.jcloud.com.c-bj.jcloud.com/cms/e19dac38-1868-415c-a993-0c562dbd841120170109200714.png",
	      icons: ["//www.jcloud.com/home/images/pl_icon3.png", "//www.jcloud.com/home/images/pl_icon4.png", "//www.jcloud.com/home/images/pl_icon5.png"],
	      style: {background: '#53C497'},
	      title: '数知',
	      p: '提供场景化的使用体验，降低使用门槛；开放全面的API，为开发者打造再创造生态。'
	    }
      
        let plData3 = {
	      bg: "//www.jcloud.com/home/images/item_bg.png",
	      rotate: "//www.jcloud.com/home/images/pl_rotate.png",
	      logo: "http://www.jcloud.com.c-bj.jcloud.com/cms/ae3b039f-2fe9-403a-a942-c4743acd146d20170109200609.png",
	      icons: ["//www.jcloud.com/home/images/pl_icon6.png", "//www.jcloud.com/home/images/pl_icon7.png", "//www.jcloud.com/home/images/pl_icon8.png"],
	      style: {background: '#56BCB0'},
	      title: '区块链',
	      p: '提供区块链业务咨询、相关业务项目支撑及兼容区块链的云服务，提供可落地的解决方案。'
	    }

	    let solutionData1 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/0ead23cc-570d-4620-9a0e-e997ade4114120170109175703.jpg',
	      title: '电商云解决方案',
	      p: '在云计算和大数据基础上，结合了京东十多年电子商务技术及运营经验，推出的帮助传统企业互联网转型和升级的以企业交易为核心的综合电子商务解决方案。',
	      link: '//www.jcloud.com/dsy/index.html',
	      secondbg: '#448aff',
	      icon: 'iconfont icon-dianshangxuqiu'
	    }
	    let solutionData2 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/3473cbeb-3562-4b9f-9508-12354b24b4e420170109175722.jpg',
	      title: '物流云解决方案',
	      p: '依托京东稳定、高效、灵活的云计算和大数据能力，为政府和企业提供物流技术、产品及运营咨询服务，降低用户自建物流成本，提升物流运营效率，助力政企互联网+物流转型升级。',
	      link: '//www.jcloud.com/dsy/index.html',
	      secondbg: '#1eb5d7',
	      icon: 'iconfont icon-yun'
	    }
	    let solutionData3 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/6402ecdb-222e-488b-81fa-63f6f3e7be8320170109175739.jpg',
	      title: '智能云解决方案',
	      p: '依托京东云技术和大数据能力，整合京东在互联网市场的优质资源，提供技术支持、智能产品对接、智能创业孵化等服务，加速政府、企业及个人在“互联网+智能”创新转型。',
	      link: '//www.jcloud.com/zny/index.html',
	      secondbg: '#fed387',
	      icon: 'iconfont icon-zhinengyun'
	    }
	    let solutionData4 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/57686884-9a8a-4801-9b3f-e0e7a20470bd20170109175757.jpg',
	      title: '产业云解决方案',
	      p: '立足产业客户的行业需求，依托京东云强大的技术与云产品；并结合京东的互联网+的实践经验与集团资源；透过京东云专业服务，共筑行业标杆与业界领先的产业解决方案。',
	      link: '//www.jcloud.com/cyy/index.html',
	      secondbg: '#eb6451',
	      icon: 'iconfont icon-chanyeyun'
	    }
	    let solutionData5 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/cdf1b3c6-2926-4f53-94ae-97e26e115a8720170109175816.jpg',
	      title: '金融行业解决方案',
	      p: '采用独立的机房集群，与公有云物理隔离。基于两地三中心的机房布局，满足一行三会对于金融业的监管要求。帮助金融客户从现有传统IT迈向大数据和云计算，实现业务创新转型。',
	      link: '//www.jcloud.com/financial/index.html',
	      secondbg: '#448aff',
	      icon: 'iconfont icon-icon'
	    }
	    let solutionData6 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/2ce4e56f-2add-49b1-a87c-8568c427190a20170109175835.jpg',
	      title: '大数据解决方案',
	      p: '结合京东“完善高质的数据链+丰富的业务场景+强大的数据分析能力”，数知充分覆盖各行业大数据需求。京东云大数据专家团队将根据用户具体需求，提供丰富的解决方案。',
	      link: '//xdata.jcloud.com/resources/app/dataCloud/solution.html',
	      secondbg: '#1eb5d7',
	      icon: 'iconfont icon-dashujuzhenghe'
	    }
	    let solutionData7 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/2289a0f3-119b-4c8d-9d89-b61f5795710e20170109175856.jpg',
	      title: '托管云解决方案',
	      p: '整合京东云丰富的云资源，为您提供稳定、安全、经济的应用托管解决方案。一站式服务，业务轻松上云；弹性扩展，轻松应对业务快速增长；全方面安全防护，保障业务数据安全。',
	      link: '//www.jcloud.com/tgy/index.html',
	      secondbg: '#fed387',
	      icon: 'iconfont icon-yuntuoguan'
	    }
	    let solutionData8 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/749c6111-94b4-4ccf-988d-2a907e35b12720170109175903.jpg',
	      title: '京东云鼎',
	      p: '整合京东云技术能力及数据能力、京东电商数据及服务，为ISV服务商及京东商家、供应商等提供一个包含弹性托管、数据存储、数据同步与数据集成等服务的云计算平台。',
	      link: '//www.jcloud.com/yd/index.html',
	      secondbg: '#eb6451',
	      icon: 'iconfont icon-yunding'
	    }
	    let serviceData1 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/3013591f-3fc8-4776-8d94-5251057f06fe20170109180310.png',
	      title: '基础软件',
	      items: ['PHP环境', '.NET环境', 'JAVA环境']
	    }
	    let serviceData2 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/5322e290-1196-4746-933e-0ad6aebe0c8520170109180318.png',
	      title: '企业软件',
	      items: ['ERP管理', '协同办公', '财务管理']
	    }
	    let serviceData3 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/fb3ba1cb-af29-403f-8090-62f7a9ad7c0420170109180321.png',
	      title: '数据工具',
	      items: ['采集及迁移', '存储及分析', '数据可视化']
	    }
	    let serviceData4 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/b5cfaf13-61d4-495e-9b29-fe7d45fa29b620170109180325.png',
	      title: '云安全',
	      items: ['主机安全', '网络完全', '数据安全']
	    }
	    let serviceData5 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/6b2aa326-1c50-4e93-95fb-8a569b702ac620170109180329.png',
	      title: '建站市场',
	      items: ['网站模板', '网站定制', 'APP定制']
	    }
	    let serviceData6 = {
	      imgUrl: 'http://www.jcloud.com.c-bj.jcloud.com/cms/02e6b4cd-2ec2-4b46-a5d1-755d3c1e162220170109180333.png',
	      title: '服务市场',
	      items: ['运维服务', '运营服务', '解决方案']
	    }
	    let partner = [
	    'http://www.jcloud.com.c-bj.jcloud.com/cms/203cdf27-a97d-48cb-9d54-da29e37d52c720170109181029.png',
	    'http://www.jcloud.com.c-bj.jcloud.com/cms/764bb163-c21b-43c3-98cc-a89d92f460c820170109181036.png',
	    'http://www.jcloud.com.c-bj.jcloud.com/cms/5e761cbb-2167-490c-9350-25dd48b545e620170109181043.png',
	    'http://www.jcloud.com.c-bj.jcloud.com/cms/e640f7b3-429e-4aab-a5b2-acea9ce1270a20170109181046.png',
	    'http://www.jcloud.com.c-bj.jcloud.com/cms/1dd461eb-e096-4264-a340-73ea83cbd15220170109181055.png'
	    ]
	    let FootItemData1 = {
	      title: '常见任务',
	      items: ['代金卷', '发票', '备案']
	    }
	    let FootItemData2 = {
	      title: '热门活动',
	      items: ['JD云体验官', '初创扶持', '推广返用']
	    }
	    let FootItemData3 = {
	      title: '便捷入口',
	      items: ['基础云控平台', '数据云控平台', '云市场', '京东万象']
	    }
	    let FootItemData4 = {
	      title: '其它',
	      items: ['可信中心', '渠道合作']
	    }
	    let FootItemData5 = {
	      title: '联系我们',
	      items: ['咨询热线 4006151212（7*24）', '渠道加盟 4006151212转6', '京东云微信', '京东云微博']
	    }
	  return (
	  	<div>
	  	  <Slider data={sliderData}/>
	  	  <Main title="安全、稳定、可信赖的云计算产品" style={{background: "#EEF3F7"}}>
	  	    <Shutter data={shutterData1} id={0}></Shutter>
	  	    <Shutter data={shutterData2} id={1}></Shutter>
	  	    <Shutter data={shutterData3} id={2}></Shutter>
	  	    <Shutter data={shutterData4} id={3}></Shutter>
	  	  </Main>
	  	  <Main title="精心打造的明星产品" style={{background: "white"}}>
	  	    <Pl data={plData1}></Pl>
	  	    <Pl data={plData2}></Pl>
	  	    <Pl data={plData3}></Pl>
	  	  </Main>
	  	  <Main title="成熟领先的解决方案" style={{background: 'url(//static.360buyimg.com/jcloud/jc/1.0.0/widget/m-main3/i/bg-m-main3.jpg) no-repeat center #3b4560', color: 'white'}}>
	  	    <div className="solutionSlider">
	  	      <SolutionSliderWrap>
	  	        <Solution data={solutionData1}/>
	  	        <Solution data={solutionData2}/>
	  	        <Solution data={solutionData3}/>
	  	        <Solution data={solutionData4}/>
	  	        <Solution data={solutionData5}/>
	  	        <Solution data={solutionData6}/>
	  	        <Solution data={solutionData7}/>
	  	        <Solution data={solutionData8}/>
	  	      </SolutionSliderWrap>
	  	    </div>
	  	  </Main>
	  	  <Main title="海量优质的软件与服务" style={{background: '#EEF3F7'}}>
	  	    <Service data={serviceData1}/>
	  	    <Service data={serviceData2}/>
	  	    <Service data={serviceData3}/>
	  	    <Service data={serviceData4}/>
	  	    <Service data={serviceData5}/>
	  	    <Service data={serviceData6}/>
	  	  </Main>
	  	  <Main title="遍布全球的顶级数据中心" style={{background: '#3b4560', color: 'white'}}>
	  	    <div className="map">
	  	      {
	  	      	[1,2,3,4].map(val=>{
	  	      	  return <div className={'ball'+val} key={val}></div>
	  	      	})
	  	      }
	  	    </div>
	  	  </Main>
	  	  <Main title="专业、可靠的合作伙伴">
	  	    {
	  	      partner.map((imgUrl, index)=>{
	  	      	return (
	  	      	  <div className="partner" key={index}>
	  	      	    <img src={imgUrl}/>
	  	      	  </div>
	  	      	)
	  	      })
	  	    }
	  	  </Main>
	  	  <div className="signUp">
	  	    <h4>新用户注册有礼、免费体验京东云</h4>
	  	    <a target="_blank">立即注册</a>
	  	  </div>
	  	  <div className="guarantee">
	  	    <div className="guarantee-wrap">
	  	    <a>
	  	      <i className="iconfont icon-liubianxing"></i>
	  	      <p>专</p>
	  	      <p className="text">7*24小时售后支持</p>
	  	    </a>
	  	      <a>
	  	      <i className="iconfont icon-liubianxing"></i>
	  	      <p>尊</p>
	  	      <p className="text">VIP一对一服务</p>
	  	    </a>
	  	      <a>
	  	      <i className="iconfont icon-liubianxing"></i>
	  	      <p>备</p>
	  	      <p className="text">免费备案服务</p>
	  	    </a>
	  	      <a>
	  	      <i className="iconfont icon-liubianxing"></i>
	  	      <p>赔</p>
	  	      <p className="text">100倍故障延时赔偿</p>
	  	    </a>
	  	    </div>
	  	  </div>
	  	  <div className="foot">
	  	    <div className="foot-wrap">
	  	      <FootItem data={FootItemData1}/>
	  	      <FootItem data={FootItemData2}/>
	  	      <FootItem data={FootItemData3}/>
	  	      <FootItem data={FootItemData4}/>
	  	      <FootItem data={FootItemData5}/>
	  	    </div>
	  	    <div className="foot-end">
	  	      {
	  	      	['京东开放平台', '京东服务市场', '京东商城', '京东金融', '京东沧海', '京东企业购', '企业金融服务'].map((item, index)=>{
	  	      	  return (
	  	      	    <span className="item" key={index}>{item}</span>
	  	      	  )
	  	      	})
	  	      }
	  	      <span className="item" style={{border: 'none'}}>京东开普勒</span>
	  	      <p>Copyright © 2012-2017  Jcloud.com  版权所有  京ICP备11041704号-6  京ICP证070359号</p>
	  	    </div>
	  	  </div>
	  	</div>
	  )
	}
}

export default App