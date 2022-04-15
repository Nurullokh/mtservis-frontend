import { Badge, Button, Container, Group, Loader } from "@mantine/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetSingleBlock } from "../../server-state/queries/use-get-single-block";
import { Card, Image, Text } from "@mantine/core";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const SingleBlock = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetSingleBlock(id);
  const { goBack } = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container size="xs">
        <Typography align="center" m="20px" variant="h4" component="h2">
          {data?.title}
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
          <Card
            shadow="sm"
            p="xl"
            component="a"
            // href={data?.share_url}
            // target="_blank"
          >
            <Card.Section>
              <Image
                fit="contain"
                src={data?.image?.file}
                alt="No way!"
                styles={{ image: { maxHeight: "600px" } }}
              />
            </Card.Section>
            <Group position="apart" style={{ marginBottom: 5, marginTop: 30 }}>
              <Text weight={500} size="lg">
                {data?.title}
              </Text>
              {data?.created_at && (
                <Badge color="pink" variant="light">
                  {t("blog.created")}:{" "}
                  {new Date(data?.created_at).toLocaleDateString("uz")}
                </Badge>
              )}
            </Group>

            <Text size="sm">{data?.description}</Text>
            <Button
              // variant="light"
              // color="blue"
              fullWidth
              style={{ marginTop: 14 }}
              onClick={goBack}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              {t("blog.back")}
            </Button>
          </Card>
        )}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SingleBlock;
