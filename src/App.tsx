import React, {Component} from 'react';
import Button from './components/Button'
import InputField from './components/InputField'
import Gallery from './components/Gallery'
import './App.scss'

class App extends Component{
  state = {
    galleryData: [],
    currentTag: '',
    isGrouped: false
  }
  render(){
    return (
      <div className="App">
        <div className='search'>
          <InputField getTag={this.getTag} currentTag={this.state.currentTag} />
          <div className='search__buttons'>
            <Button tag={this.state.currentTag} getImages={this.getImages} purpose={'load'} />
            <Button tag={this.state.currentTag} clearImages={this.clearImages} purpose={'clear'} />
            <Button tag={this.state.currentTag} groupImages={this.groupImages} purpose={'group'} isGrouped={this.state.isGrouped} />
          </div>
        </div>
        <Gallery galleryData={this.state.galleryData} isGrouped={this.state.isGrouped} getImageTeg={this.getImageTeg} />
      </div>
    );
  }

  getTag = (tag: string) => {
    this.setState({
      currentTag: tag
    })
    setTimeout(() => {
      console.log(this.state.currentTag)
    }, 1);
  }

  getImages = (tag: string) => {
    if(!tag){
      alert('Заполните поле "тег"')
      return
    }
    const url: string = ('https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=$' + tag)
    fetch(url)
    .then(res => res.json())
    .then(
      (result: any) => {
        if(result.data.length === 0){
          alert('По тегу ничего не найдено')
        }
        // console.log(result, '', result.data.length)
        result.data['tag'] = tag
        result.data['index'] = this.state.galleryData.length + 1
        const newState = this.state.galleryData.concat(result.data)
        this.setState({
          galleryData: newState
        })
      },
      (error) => {
        this.setState({
          error
        })
        alert('Произошла HTTP-ошибка')
      }
      )
      setTimeout(() => {  
        console.log(this.state.galleryData)
      }, 1);
  }

  clearImages = () => {
    this.setState({
      galleryData: [],
      currentTag: ''
    })
  }

  groupImages = () => {
    this.setState({
      isGrouped: !this.state.isGrouped
    })
  }

  getImageTeg = (val: string) => {
    this.setState({
      currentTag: val
    })
  }
}

export default App;
