import * as React from 'react';
import { AppBar, Grid } from '@material-ui/core'
import styled from 'styled-components';

import { MaxWidthCenteredContent } from './MaxWidthCenteredContent';

type AppParPosition = 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';

interface Props {
    position?: AppParPosition,
    children?: React.ReactNode | React.ReactNodeArray;
}

/**
 * A standard application header used by demos and other AI2 made applications.
 */
export const Header = (props: Props) => {
    const { children, position } = props;
    // Make sure the children are an array, as we allow them to specify
    // a single descendent.
    const childArray = Array.isArray(children) ? children : [ children ];
    return (
        <StyledAppBar position={position}>
            <MaxWidthCenteredContent>
                <Grid container spacing={24} alignItems="center" wrap="wrap">
                    {childArray.map((child, idx) => (
                        <Grid item key={`header-child-${idx}`} xs="auto">
                            {child}
                        </Grid>
                    ))}
                </Grid>
            </MaxWidthCenteredContent>
        </StyledAppBar>
    );
}

const StyledAppBar = styled(AppBar)`
    border-top: 4px solid ${props => props.theme.palette.highlight.main};
    && {
        background: #fff;
    }
`
