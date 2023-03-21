import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountLayout from './account/ui/accountLayout';
import Layout from './layout/ui/layout';
import Dashboard from './dashboard/ui/dashboard';
import Diary from './diary/ui/diary';
import RegisterDiary from './diary/ui/registerDiary'
import Menu from './menu/ui/menu';
import RegisterMenu from './menu/ui/registerMenu'

export default class App extends Component {
  render () {
    return (
      <Routes>
        <Route path="/" element={<AccountLayout />} />
        <Route element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/registerDiary" element={<RegisterDiary />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/registerMenu" element={<RegisterMenu />} />
        </Route>
        {/*<Route path="/*" element={<NotFound />} />*/}
      </Routes>
    );
  }
}

