'use server'

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import getAll from "./database";
import sendEmail from './email';
import { ItemProperties } from "./types";
import Masonry from "@mui/lab/Masonry";
import { useState } from "react";
import { AccountCircle, Info, Notes, Send } from "@mui/icons-material";

export async function List({ title, id }: { title: string; id: string }) {
  const items = await getAll<ItemProperties>(id);

  return (
    <Stack>
      <Typography
        variant="h3"
        id={id}
      >
        {title}
      </Typography>

      <Masonry
        columns={2}
        spacing={5}
        sequential
        sx={{ width: "80%", margin: "auto" }}
      >
        {items.map((item, index) => (
          <ItemCard
            item={item}
            key={index}
          />
        ))}
      </Masonry>
    </Stack>
  );
}

function ItemCard({ item }: { item: ItemProperties }) {
  return (
    <Card
      sx={{ width: 300 }}
    >
      <CardActionArea>
        <CardMedia
          component={item.mediaType}
          src={item.media}
          image={item.media}
        />

        <CardHeader
          title={item.title}
          subheader={item.subTitle}
        />

        <CardContent>
          <Typography
            variant="body1"
          >
            {item.description}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
          >
            {item.subDescription}
          </Typography>
        </CardContent>

        {item.tags.map((tag1) => (
          <CardActions
            sx={{ flexWrap: "wrap", rowGap: "8px" }}
          >
            <Typography>
              {tag1.name}
            </Typography>

            <Box>
              {tag1.tags.map((tag2) => (
                <Chip
                  label={tag2}
                  key={tag2}
                />
              ))}
            </Box>
          </CardActions>
        ))}
      </CardActionArea>
    </Card>
  );
}

export async function ContactSendEmail() {
  const [ subject, setSubject ] = useState("");
  const [ senderEmail, setSenderEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  return (
    <Stack>
      <Typography
        variant="h3"
        id="contact"
      >
        Contact Me
      </Typography>

      <Card>
        <CardContent>
          <TextField
            label="Subject"
            variant="filled"
            fullWidth
            onChange={(e) => setSubject(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <Info />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Your Email"
            variant="filled"
            fullWidth
            onChange={(e) => setSenderEmail(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Message"
            variant="filled"
            fullWidth
            rows={6}
            multiline
            onChange={(e) => setMessage(e.target.value)}
              slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <Notes />
                  </InputAdornment>
                ),
              },
            }}
          />
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            onClick={() => sendEmail(subject, senderEmail, message)}
            startIcon={<Send />}
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </Stack>
  )
}
