import {
  Box,
  Checkbox,
  colors,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IPost } from "../../interfaces/post";
import { useState } from "react";

interface IListPost {
  posts: IPost[];
  setPostChecked: (post: IPost) => void;
}

const ListPost = ({ posts, setPostChecked }: IListPost) => {
  const [checked, setChecked] = useState<number | null>(null);

  const handleCheckBox = (post: IPost) => {
    setChecked(post.id);
    setPostChecked(post);
  };

  return (
    <List
      sx={{
        px: { md: "20px", lg: "40px", xl: "40px" },
        width: "100%",
      }}
    >
      {posts.map((post: IPost) => {
        return (
          <ListItem
            key={post.title}
            sx={{
              justifyContent: "center",
              border: "1px solid aliceblue",
              borderRadius: "5px",
              mb: "15px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemText
                primary={`Título:`}
                sx={{ color: colors.grey[300] }}
              />
              <ListItemText
                primary={post.title}
                sx={{ color: colors.grey[500] }}
              />

              <ListItemText
                primary={`Post:`}
                sx={{ color: colors.grey[300] }}
              />
              <ListItemText
                primary={post.body}
                sx={{ color: colors.grey[500] }}
              />
            </Box>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked === post.id}
                onChange={() => handleCheckBox(post)}
              />
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
};
export default ListPost;
