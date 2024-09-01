import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 900px;
  height: 400px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 30px;
  display: flex;
  gap: 30px;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: rotateY(10deg);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1200px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 420px);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Content>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
        <Button href={project.github} target="_blank">
          View Code
        </Button>
      </Content>
    </Card>
  );
};

export default ProjectCard;
