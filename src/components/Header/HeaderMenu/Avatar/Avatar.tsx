import React from 'react';

import * as Avatar from '@radix-ui/react-avatar';

import AvatarNotLogged from '../../../../assets/AstronautWithoutAcc.png';
import AvatarLogged from '../../../../assets/AstronautSignUp.png';

export const UserAvatar = () => {
<<<<<<< HEAD:src/components/Header/HeaderMenu/Avatar/Avatar.tsx
	return (
		<Avatar.Root>
			<Avatar.Image
				style={{
					maxWidth: "var(--height-2)",
					height: "var(--height-2)",
					borderRadius: "100%"
				}}
				src={AvatarNotLogged}
				alt="user"
				title="user"
			/>
			<Avatar.Fallback delayMs={600}>U</Avatar.Fallback>
		</Avatar.Root>
	);
=======
  return (
    <Avatar.Root>
      <Avatar.Image
        style={{
          maxWidth: 'var(--height-2)',
          height: 'var(--height-2)',
          borderRadius: '100%',
        }}
        src={AvatarNotLogged}
        alt="usuario"
      />
      <Avatar.Fallback delayMs={600}>U</Avatar.Fallback>
    </Avatar.Root>
  );
>>>>>>> feat/modalinfo:src/pages/Home/HeaderMenu/Avatar/Avatar.tsx
};

//lembrar de identar
