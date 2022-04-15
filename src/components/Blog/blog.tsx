import { Badge, Container, Loader } from "@mantine/core";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Grid,
} from "@mantine/core";
import { useGetBlogs } from "../../server-state/queries/use-get-blogs";
import { useHistory } from "react-router-dom";
import { useGetBlogImages } from "../../server-state/queries/use-get-blog-images";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loader";

const BlogPage = () => {
  const theme = useMantineTheme();
  const { push } = useHistory();
  const { data, isLoading } = useGetBlogs();
  const images = useGetBlogImages();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography align="center" m="20px" variant="h4" component="h2">
          {t("blog.h1")}
        </Typography>

        {isLoading ? (
          <Loader
            style={{
              margin: "auto",
              transform: "translateX(50%)",
              position: "absolute",
              left: "48%",
            }}
          />
        ) : (
          <Grid gutter="xl" grow>
            {data?.pages[0].results.map((blog) => {
              return (
                <Grid.Col span={4} key={blog.id}>
                  <Card shadow="sm" p="lg">
                    <Card.Section>
                      <Image
                        fit="contain"
                        styles={{ image: { maxHeight: "350px" } }}
                        src={blog.image.file}
                        // height={160}
                        alt="Blog Image"
                      />
                    </Card.Section>

                    <Group
                      position="apart"
                      style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                      <Text weight={500}>{blog.title}</Text>
                      <Badge color="pink" variant="light">
                        {t("blog.created")}:{" "}
                        {new Date(blog.created_at).toLocaleDateString("uz")}
                      </Badge>
                    </Group>

                    {/* <Text
                      size="sm"
                      style={{ color: secondaryColor, lineHeight: 1.5 }}
                    >
                      With Fjord Tours you can explore more of the magical fjord
                      landscapes with tours and activities on and around the
                      fjords of Norway
                    </Text> */}

                    <Button
                      // variant="light"
                      // color="blue"
                      fullWidth
                      style={{ marginTop: 14 }}
                      onClick={() => push(`/blogs/${blog.id}`)}
                      variant="gradient"
                      gradient={{ from: "indigo", to: "cyan" }}
                    >
                      {t("blog.button")}
                    </Button>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        )}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default BlogPage;
