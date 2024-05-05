import { Component } from "@angular/core";

export interface ChatMessage {
    sender: string;
    message: string;
  }
  
  @Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
  })
  export class ChatbotComponent {
    userInput: string = '';
    chatHistory: ChatMessage[] = [];

    ngOnInit() {
        setTimeout(() => {
          this.chatHistory.push({ sender: 'YOU', message: 'Hallo! Wie kann ich Ihnen helfen?' });
        }, 1000);
      }
    
  
      sendMessage() {
        if (this.userInput.trim() !== '') {
          this.chatHistory.push({ sender: 'ME', message: this.userInput });
          this.userInput = '';
    
          setTimeout(() => {
            this.chatHistory.push({ sender: 'YOU', message: 'Einen Moment bitte...' });
          }, 500);    
        }
      }
  
    selectOption(option: string) {
        setTimeout(() => {
            this.chatHistory.push({ sender: 'YOU', message: 'Einen Moment bitte...' });
          }, 500);      
      switch (option) {
        case 'Option 1':
          this.chatHistory.push({ sender: 'ME', message: 'Allgemeine Informationen ausgewählt.' });
          this.chatHistory.push({ sender: 'YOU', message: 'Klicke auf den Link für weitere Informationen: <a href="https://www.lbs4.salzburg.at/" target="_blank">LBS4 Salzburg</a>' });          
          break;
        case 'Option 2':
          this.chatHistory.push({ sender: 'ME', message: 'Wie finde ich zur Eduvidual?'} );
          window.open('https://www.eduvidual.at', '_blank');
          break;
        case 'Option 3':
          this.chatHistory.push({ sender: 'ME', message: 'Wo ist der Stundenplan zu finden?'});
          window.open('https://www.eduvidual.at', '_blank');
          break;
        default:
          window.alert('Ungültige Option ausgewählt');
      }
    }
  }
  