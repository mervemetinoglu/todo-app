import {
  useTheme,
  Checkbox,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { HiOutlineTrash } from 'react-icons/hi';
import { ITodo } from '@/api/models/todos.model';
import { ID_PREFIX } from '@/constants/dummyIdPrefix';

interface ITaskItemProps {
  todo: ITodo;
  onClickDelete: () => void;
  onClickToggle: () => void;
}

export const TodoListItem = (props: ITaskItemProps) => {
  const muiTheme = useTheme();

  const { todo, onClickDelete, onClickToggle } = props;
  const { id, isCompleted, todo: todoText } = todo;

  const hasDummyId = id.includes(ID_PREFIX);

  const labelId = `checkbox-list-label-${id}`;

  return (
    <ListItem
      key={id}
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          disableRipple
          aria-label="todo delete button"
          onClick={() => onClickDelete()}
          sx={{
            '& > svg': {
              '&:hover': {
                stroke: (theme) => theme.customColors.orange50,
              },
            },
          }}
        >
          <HiOutlineTrash
            color={muiTheme.customColors.orange100}
            fontSize={24}
          />
        </IconButton>
      }
    >
      <ListItemButton
        dense
        disableRipple
        disabled={hasDummyId}
        onClick={() => onClickToggle()}
        sx={{
          px: 1,
          borderBottom: `1px solid ${muiTheme.customColors.gray50}`,
          textDecoration: isCompleted ? 'line-through' : 'none',
          '&:hover': {
            textDecoration: isCompleted ? 'line-through' : 'none',
            backgroundColor: (theme) => theme.customColors.pink50,
          },
        }}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={isCompleted}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todoText} />
      </ListItemButton>
    </ListItem>
  );
};
