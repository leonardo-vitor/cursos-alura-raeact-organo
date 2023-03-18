import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    { id: uuidv4(), name: 'Programação', color: '#57c278' },
    { id: uuidv4(), name: 'Front-end', color: '#82cffa' },
    { id: uuidv4(), name: 'Data Science', color: '#a6d157' },
    { id: uuidv4(), name: 'DevOps', color: '#e06b69' },
    { id: uuidv4(), name: 'UI/UX', color: '#db6ebf' },
    { id: uuidv4(), name: 'Mobile', color: '#ffba05' },
    { id: uuidv4(), name: 'Gestão', color: '#ff8a29' }
  ]);

  const initialMembers = [
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name,
      favorite: false
    },
  ]

  const [members, setMembers] = useState(initialMembers);

  const onAddMember = (member) => {
    setMembers([...members, { ...member, id: uuidv4(), favorite: false }])
  }

  const onAddTeam = (team) => {
    setTeams([...teams, { ...team, id: uuidv4() }])
  }

  function onRemoveMember(memberId) {
    setMembers(members.filter(member => member.id !== memberId));
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function favoriteMember(memberId, favorite){
    setMembers(members.map(member => {
      if (member.id === memberId) {
        member.favorite = !member.favorite;
      }
      return member;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        onSaveMember={member => onAddMember(member)}
        onSaveTeam={team => onAddTeam(team)}
        teams={teams.map(team => team.name)}
      />

      {teams.map(team => <Team
        key={team.name}
        team={team}
        members={members.filter(member => member.team === team.name)}
        onRemove={onRemoveMember}
        onChangeTeamColor={changeTeamColor}
        onFavorite={favoriteMember}
      />)}

      <Footer />
    </div>
  );
}

export default App;
