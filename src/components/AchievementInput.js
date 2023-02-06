import { HStack, Input, Button, useToast} from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
import {push as pushAchievement} from "../store/modules/achievements"
import { useState } from "react";

const AchievementInput = () =>{
    const [achievementTitle, setachievementTitle] = useState("");
    const achievements = useSelector(state => state.achievements);
    const toast = useToast();

    const dispatch = useDispatch();

    const addButtonClicked = (e) =>{
        e.preventDefault();

        if (!achievementTitle) {
            toast({
              title: "達成した項目を入力してください",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }

          const achievement = {id: achievements.length, title: achievementTitle}
          const action = pushAchievement(achievement)
          dispatch(action)

          setachievementTitle("");
      
          toast({
            title: "達成した項目を追加しました！",
            description: achievementTitle,
            status: "info",
            duration: 3000,
            isClosable: true,
          }); 
        
    }

    return (
        <form onSubmit={addButtonClicked}>
            <HStack>
                <Input
                    placeholder="達成したこと"
                    _placeholder={{ opacity: "0.3", color: "gray.500" }}
                    size="lg"
                    p={5}
                    bgColor="white"
                    variant="flushed"
                    value={achievementTitle}
                    onChange={(e) => setachievementTitle(e.target.value)}
                    />
                <Button
                    colorScheme="blue"
                    size="md"
                    bgColor="white"
                    variant="outline"
                    px={7}
                    type="submit"
                    >
                    追加
                </Button>
            </HStack>
        </form>
    )   
}

export default AchievementInput
