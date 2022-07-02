import React from 'react';
import "./Home.css";
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';




const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="user Analytics" grid  dataKey="Active User"/>
      <div className="homeWidgets">
         <WidgetSm/>
         <WidgetLg/>
      </div>

      <about/>
    </div>
  )
}

export default Home