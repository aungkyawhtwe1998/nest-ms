import { Optional } from "@nestjs/common";
import { Field, InputType } from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from 'class-validator'

@InputType()
export class RegisterDto {
    @Field()
    @IsNotEmpty({message: 'Name is required.'})
    @IsString({message:'Name must need to be one string.'})
    name: string;

    @Field()
    @IsNotEmpty({message:'Password is required.'})
    @MinLength(8, {message: 'Password must be at least 8 characters.'})
    password: string;

    @Field()
    @IsNotEmpty({message:'Email is required.'})
    @IsEmail({}, {message: 'Email is required.'})
    email: string;

    @Field()
    @IsNotEmpty({message:'Phone number is required.'})
    @IsNumber({},{message: 'Phone number is required.'})
    phone_number: number;

    @IsString()
    @Optional()
    address: string;

}

@InputType()
export class ActivationDto{
    @Field()
    @IsNotEmpty({message:'Activation Token is required'})
    activationToken: string;


    @Field()
    @IsNotEmpty({message: 'Activation Code is required'})
    activationCode: string;
}

@InputType()
export class LoginDto {
  

    @Field()
    @IsNotEmpty({message:'Password is required.'})
    @MinLength(8, {message: 'Password must be at least 8 characters.'})
    password: string;

    @Field()
    @IsNotEmpty({message:'Email is required.'})
    @IsEmail({}, {message: 'Email is required.'})
    email: string;

}