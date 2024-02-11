export interface ITheme {
  colors: {
    core: string;
    emerald: string;
    hunter: string;
    notice: string;
    balance: string;
  };
  layout: {
    topBarHeight: number;
  };
  fonts: {
    family: {
      primary: {
        regular: string;
        bold: string;
      };
      secondary: {
        regular: string;
        bold: string;
      };
    };
    size: {
      smallest: string;
      small: string;
      medium: string;
      large: string;
    };
  };
}

const common = {
  colors: {
    core: '#022C33',
    emerald: '#179C65',
    hunter: '#106F48',
    notice: '#FDB366',
    balance: '#FFFFFF',
  },
  layout: {
    leftBarWidth: 200,
    topBarHeight: 130,
  },
  fonts: {
    size: {
      smallest: '12px',
      small: '14px',
      medium: '20px',
      large: '32px',
    },
  },
};

export const lightTheme: ITheme = {
  layout: common.layout,
  fonts: {
    ...common.fonts,
    family: {
      primary: {
        regular: 'Roboto Regular',
        bold: 'Roboto Bold',
      },
      secondary: {
        regular: 'Montserrat Regular',
        bold: 'Montserrat Bold',
      },
    },
  },
  colors: { ...common.colors },
};

export const darkTheme: ITheme = {
  layout: common.layout,
  fonts: {
    ...common.fonts,
    family: {
      primary: {
        regular: 'Roboto Regular',
        bold: 'Roboto Bold',
      },
      secondary: {
        regular: 'Montserrat Regular',
        bold: 'Montserrat Bold',
      },
    },
  },
  colors: { ...common.colors },
};
