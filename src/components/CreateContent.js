import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('Content render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              alert("추가되었습니다.");
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><input type="textarea" name="desc" placeholder="description"></input></p>
            <p><input type="submit" ></input></p>
          </form>
        </article>
      );
    }
  }

export default CreateContent;