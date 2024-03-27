import { render, screen } from "@testing-library/react"
import RoleSelectionLayout from "../RoleSelectionLayout"

test('Role Select Page visible test', () => {
    render(<RoleSelectionLayout />)

    expect(screen.getByTestId('professionalTestId')).toBeInTheDocument()
    expect(screen.getByTestId('employerTestId')).toBeInTheDocument()
    expect(screen.getByTestId('partnerTestId')).toBeInTheDocument()
    expect(screen.getByTestId('cardSignupButton')).toBeInTheDocument()
})