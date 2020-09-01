import React from 'react';

import './App.css';

import Card from './components/layout/Card';

import First from './components/basics/First';
import WithProp from './components/basics/WithProp';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentList from './components/repeat/StudentList';
import ProductsList from './components/repeat/ProductsList';
import PairOrOdd from './components/conditional/PairOrOdd';
import ShowUser from './components/conditional/ShowUser';
import DirectFather from './components/communication/DirectFather';
import IndirectFather from './components/communication/IndirectFather';
import Input from './components/form/Input';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card title="#12 - Controlled components">
                <Input></Input>
            </Card>
            <Card title="#11 - Indirect communication" color="#542733">
                <IndirectFather></IndirectFather>
            </Card>
            <Card title="#10 - Direct communication" color="#F38630">
                <DirectFather></DirectFather>
            </Card>
            <Card title="#9 - Show User with conditional" color="#91C5A9">
                <ShowUser user={{ name: 'Ottinho' }} />
                <br/>
                <span>if unnamed</span> 
                <ShowUser />
            </Card>
            <Card title="#8 - Pair or odd" color="#333332">
                <PairOrOdd number={1}></PairOrOdd>
                <PairOrOdd number={40}></PairOrOdd>
                <PairOrOdd number={30.1}></PairOrOdd>
                <PairOrOdd number={101}></PairOrOdd>
            </Card>
            <Card title="#7 - Products list" color="#F17D80">
                <ProductsList></ProductsList>
            </Card>
            <Card title="#6 - Student list" color="#FFA200">
                <StudentList></StudentList>
            </Card>
            <Card title="#5 - Family" color="#260126">
                <Family surname="Maia">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Gustavo" />
                    <FamilyMember name="Martha" />
                </Family>

            </Card>
            <Card title="#4 - Random" color="#090">
                <Random
                    max={100}
                    min={90} />

            </Card>
            <Card title="# 3 - Fragment" color="#6E9ECF">
                <Fragment/>

            </Card>
            <Card title="#2 - With props" color="#8C4646">
                <WithProp 
                    title="Second component" 
                    subtitle="Coll to much" />

            </Card>
            <Card title="#1 - First" color="#1FDA9A">
                <First/>    
            
            </Card>
        </div>
    </div>
);