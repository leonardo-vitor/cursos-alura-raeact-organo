import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const teams = [
    { name: 'Programação', primaryColor: '#57c278', secondaryColor: '#d9f7e9' },
    { name: 'Front-end', primaryColor: '#82cffa', secondaryColor: '#e8f8ff' },
    { name: 'Data Science', primaryColor: '#a6d157', secondaryColor: '#f0f8e2' },
    { name: 'DevOps', primaryColor: '#e06b69', secondaryColor: '#fde7e8' },
    { name: 'UI/UX', primaryColor: '#db6ebf', secondaryColor: '#fae9f5' },
    { name: 'Mobile', primaryColor: '#ffba05', secondaryColor: '#fff5d9' },
    { name: 'Gestão', primaryColor: '#ff8a29', secondaryColor: '#ffeedf' }
  ];
  const [members, setMembers] = useState([]);

  const onAddMember = (member) => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form onSaveMember={member => onAddMember(member)} teams={teams.map(team => team.name)} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        members={members.filter(member => member.team === team.name)}
      />)}

      <Footer />
    </div>
  );
}

export default App;
