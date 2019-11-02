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
              avatar: "https://i.pravatar.cc/150?img=2"
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
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
          {
            id: 3,
            author: {
              name: "Ronaldinho",
              avatar: "https://i.pravatar.cc/150?img=6"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 4,
            author: {
              name: "Troy Poulamalu",
              avatar: "https://i.pravatar.cc/150?img=7"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
          {
            id: 5,
            author: {
              name: "Fallen",
              avatar: "https://i.pravatar.cc/150?img=8"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 6,
            author: {
              name: "FerGod",
              avatar: "https://i.pravatar.cc/150?img=9"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
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
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Glauber Alexandre",
              avatar: "https://i.pravatar.cc/150?img=22"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
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