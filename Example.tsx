import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import FamilyMember from '../FamilyMember/member.interface';

interface FamilyMemberInfoProps {
  member: FamilyMember;
}

const useStyles = makeStyles(() =>
  createStyles({
    familyMemberInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 320,
      minHeight: 320,
    },
  })
);

function FamilyMemberInfo({ member }: FamilyMemberInfoProps): JSX.Element {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    surname,
    dateOfDeath,
    birthday,
    img,
    id,
  } = member;

  return (
    <Card className={classes.familyMemberInfo}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={firstName || 'family member photo'}
          height="140"
          image={img || undefined}
          title={firstName || 'family member photo'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${lastName} ${firstName} ${surname}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {birthday} -{dateOfDeath}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <Link to={`/family/${id}`}>Full info</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(FamilyMemberInfo);
