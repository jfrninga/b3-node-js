import { ChatMessage } from "../components/Chat/ChatMessage";
import { ChatWrapper } from "../components/Chat/ChatWrapper";
import { NavBar } from "../components/NavBar";
import { Title } from "../components/Title";

export function Chat() {
    return (
        <>
            <NavBar />
            <Title>My chat app</Title>
            <i id="chat-status"></i>
            <ChatWrapper>
                <ChatMessage
                    author="Bibi"
                    message="Salut c'est cool"
                    isOwnMessage
                    timestamp={Date.now()}
                />
                <ChatMessage
                    author="Macron"
                    message="Wesh"
                    timestamp={Date.now()}
                />
                <ChatMessage
                    author="Bibi"
                    message="Ca va ?"
                    isOwnMessage
                    timestamp={Date.now()}
                />
                <ChatMessage
                    author="Macron"
                    message="Ouai et toi ?"
                    timestamp={Date.now()}
                />
                <ChatMessage
                    author="Bibi"
                    message="Imotep"
                    isOwnMessage
                    timestamp={Date.now()}
                />

            </ChatWrapper>
        </>
    )
}