import React, {Component} from 'react';
import './styles.css';
import Post from "../Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=55"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=3"
        },
        date: "04 Jun 2019",
        content: "Fala galera, Com qual linguagem de programação vcs atuavam antes de conhecer essa stack de JS na Rocketseat?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            content: "Eu trabalho com PHP"
          },
          {
            id: 2,
            author: {
              name: "Juliana",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content: "Cobol, sou das antigas"
          },
          {
            id: 3,
            author: {
              name: "Ronaldinho",
              avatar: "https://i.pravatar.cc/150?img=6"
            },
            content: "C++ e C"
          },
          {
            id: 4,
            author: {
              name: "Troy Poulamalu",
              avatar: "https://i.pravatar.cc/150?img=7"
            },
            content: "Java e C#"
          },
          {
            id: 5,
            author: {
              name: "Fallen",
              avatar: "https://i.pravatar.cc/150?img=8"
            },
            content: "Nenhuma, estou começando agora na programação, e vou usar essa stack de JS"
          },
          {
            id: 6,
            author: {
              name: "Bruna",
              avatar: "https://i.pravatar.cc/150?img=9"
            },
            content: "Oracle PL/SQL"
          },
        ]
      },
      {
        id: 1,
        author: {
          name: "Will Smicth",
          avatar: "https://i.pravatar.cc/150?img=10"
        },
        date: "04 Jun 2019",
        content: "Alguem mais curtiu a semana Omnistack?",
        comments: [
          {
            id: 1,
            author: {
              name: "Glauber Alexandre",
              avatar: "https://i.pravatar.cc/150?img=22"
            },
            content: "Eu curti demais, fiz a semana 8 e 9, e realmente aprendi muita coisa dessa stack de JS."
          },
          {
            id: 2,
            author: {
              name: "Ana",
              avatar: "https://i.pravatar.cc/150?img=23"
            },
            content: "Eu infelizmente não participei, mais não vejo a hora de sair a próxima para eu participar."
          },
          {
            id: 3,
            author: {
              name: "Julia",
              avatar: "https://i.pravatar.cc/150?img=24"
            },
            content: "Eu participei de todas, e não vejo a hora de sair mais uma, sempre gosto de acompanhar!!!"
          },          
        ]
      },      
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    );
  }
}

export default PostList;