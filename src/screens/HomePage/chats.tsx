import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaCog, FaPlay, FaRegCircle, FaCogs, FaExpand, FaMicrophone, FaImage, FaPaperclip, FaSmile } from 'react-icons/fa';
import { BsCheck2All } from 'react-icons/bs';
import { format } from 'date-fns';
import BottomNav from "../../components/ui/Bottomnav";

const RestaurantChat = () => {
  // State for messages and input
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Welcome to our restaurant! How can I help you?',
      sender: 'restaurant',
      time: new Date(Date.now() - 3600000),
      status: 'delivered'
    },
    {
      id: 2,
      text: 'Hello',
      sender: 'user',
      time: new Date(Date.now() - 1800000),
      status: 'read'
    },
    {
      id: 3,
      text: 'How can I help you?',
      sender: 'restaurant',
      time: new Date(Date.now() - 1200000),
      status: 'delivered'
    },
    {
      id: 4,
      text: 'How to place order',
      sender: 'user',
      time: new Date(Date.now() - 600000),
      status: 'read'
    },
    {
      id: 5,
      text: 'Video:',
      sender: 'restaurant',
      time: new Date(),
      isVideo: true,
      status: 'delivered'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date(),
      status: 'sent'
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate reply after 1-3 seconds
    setTimeout(() => {
      const replies = [
        "Thanks for your message!",
        "Our team will get back to you shortly.",
        "Would you like to see our menu?",
        "We're open from 11AM to 10PM daily."
      ];
      const reply = {
        id: messages.length + 2,
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'restaurant',
        time: new Date(),
        status: 'delivered'
      };
      setMessages(prev => [...prev, reply]);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, you would implement actual voice recording here
  };

  // Styles object
  const styles = {
    container: {
      width: '100%',
      maxWidth: '500px',
      height: '100vh',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'black',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '0px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      fontFamily: '"Poppins", sans-serif',
      paddingBottom: '100px' // Add space for bottom navigation
    },
    header: {
      backgroundColor: '#E89727',
      color: 'white',
      padding: '1.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 10
    },
    button: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    headerIcon: {
      fontSize: '1.5rem'
    },
    headerTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      margin: 0
    },
    chatMessages: {
      flex: 1,
      padding: '1rem',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://example.com/subtle-pattern.png")',
      backgroundSize: 'cover'
    },
    message: {
      display: 'flex',
      maxWidth: '80%',
      flexDirection: 'column'
    },
    incomingBubble: {
      backgroundColor: '#959292ff',
      borderRadius: '1rem',
      borderTopLeftRadius: '0.25rem',
      color: '#000',
      padding: '0.75rem 1rem',
      position: 'relative',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    },
    outgoingBubble: {
      backgroundColor: '#E89727',
      borderRadius: '1rem',
      borderTopRightRadius: '0.25rem',
      color: 'white',
      padding: '0.75rem 1rem',
      position: 'relative',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    },
    messageText: {
      margin: 0,
      fontSize: '0.9rem',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    },
    messageTime: {
      fontSize: '0.7rem',
      opacity: 0.7,
      marginTop: '0.3rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem'
    },
    videoContainer: {
      marginTop: '0.5rem'
    },
    videoThumbnail: {
      position: 'relative',
      width: '300%',
      height: '140px',
      backgroundColor: '#000',
      borderRadius: '0.5rem',
      border: '2px solid #E89727',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      ':hover': {
        transform: 'translate(-50%, -50%) scale(1.1)'
      }
    },
    playIcon: {
      fontSize: '1.5rem',
      color: 'white'
    },
    videoControls: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    progressBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      flex: 1,
      margin: '0 0.5rem'
    },
    progressDot: {
      fontSize: '0.5rem',
      color: 'white'
    },
    time: {
      fontSize: '0.7rem',
      color: 'white'
    },
    controlIcons: {
      display: 'flex',
      gap: '0.5rem'
    },
    controlIcon: {
      fontSize: '0.8rem',
      color: 'white',
      cursor: 'pointer'
    },
    inputContainer: {
      display: 'flex',
      padding: '1rem',
      backgroundColor: 'black',
      borderTop: '1px solid #333',
      alignItems: 'center'
    },
    inputField: {
      flex: 1,
      padding: '0.75rem 1rem',
      border: 'none',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(51, 51, 51, 0.8)',
      color: 'white',
      fontFamily: '"Poppins", sans-serif',
      fontSize: '0.9rem',
      outline: 'none',
      resize: 'none',
      minHeight: '20px',
      maxHeight: '100px',
      overflowY: 'auto'
    },
    sendButton: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#E89727',
      border: 'none',
      marginLeft: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease',
      ':hover': {
        transform: 'scale(1.05)'
      }
    },
    sendIcon: {
      fontSize: '1.25rem',
      color: 'white'
    },
    
    
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <button style={styles.button}>
          <FaArrowLeft style={styles.headerIcon} />
        </button>
        <h1 style={styles.headerTitle}>Ask any Question</h1>
        <button style={styles.button}>
          <FaCog style={styles.headerIcon} />
        </button>
      </header>

      {/* Chat Area */}
      <div style={styles.chatMessages}>
        {messages.map((message) => (
          <div 
            key={message.id}
            style={{ 
              ...styles.message, 
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={message.sender === 'user' ? styles.outgoingBubble : styles.incomingBubble}>
              <p style={styles.messageText}>{message.text}</p>
              {message.isVideo && (
                <div style={styles.videoContainer}>
                  <div style={styles.videoThumbnail}>
                    <div style={styles.playButton}>
                      <FaPlay style={styles.playIcon} />
                    </div>
                    <div style={styles.videoControls}>
                      <span style={styles.time}>0:00</span>
                      <div style={styles.progressBar}>
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <FaRegCircle key={dot} style={styles.progressDot} />
                        ))}
                      </div>
                      <span style={styles.time}>0:00</span>
                      <div style={styles.controlIcons}>
                        <FaCogs style={styles.controlIcon} />
                        <FaExpand style={styles.controlIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={styles.inputContainer}>
        
        
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.inputField}
          placeholder="Enter your message"
          rows={1}
        />
        
        
        
        <button 
          style={styles.sendButton}
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="chat" />
    </div>
  );
};

export default RestaurantChat;